import React, { Component } from 'react';
import './assets/style.css';
import ReactDOM from 'react-dom';
import apiService from './quizService/api';
import QuestionBox from './components/QuestionBox'; 
import Result from './components/Result';
import config from './quizService/config'


class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
    };
    getQuestions = async () => {
        apiService.getData().then(question => {
            this.setState({
                questionBank: question.data.results
            })
        });
    };
    componentDidMount() {
        this.getQuestions();
    }
    computeAnswer = (answer, correctAnswer) =>{
        if(answer === correctAnswer){
             this.setState({
                 score: this.state.score + 1
             })
        }

        this.setState({
            responses: this.state.responses < 10 ? this.state.responses + 1 : 10
        })

    }
    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="title">QuizBee</div>
                {   this.state.questionBank.length > 0 &&
                    this.state.responses < config.TOTALQUESTIONS &&
                    this.state.questionBank.map(({question, correct_answer,  incorrect_answers}, index) =>
                        (
                            
                            <QuestionBox 
                                question={question} 
                                options={()=>[...incorrect_answers, correct_answer]}
                                key={index}
                                selected={answer=> this.computeAnswer(answer, correct_answer)}
                            />
                        )
                )}

                {this.state.responses === config.TOTALQUESTIONS ? <Result score={this.state.score} playAgain={this.playAgain} /> : null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));