import React, { useState, useEffect } from "react";
import Parser from 'html-react-parser';


const QuestionBox = ({ question, options, selected }) => {
    const [answers, setAnswers] = useState(options);

    useEffect( ()=>{console.log(answers)}, [answers]);
     
    return (
        <div className="questionBox">
            <div className="question">{Parser(question)}</div>
            {answers.map((text, index) => (
                
                <button
                    key={index}
                    className="answerBtn"
                    onClick={ ()=>{
                        setAnswers([text]);
                        selected(text);
                    }}>
                        {text}
                </button>
            ))}
        </div>
    )
}


export default QuestionBox;
