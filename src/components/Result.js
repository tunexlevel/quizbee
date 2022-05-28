import React from 'react';
import config from '../quizService/config'

const Result = ({score, playAgain}) =>(
    <div className="score-board">
        <div className="score">You score {score} / {config.TOTALQUESTIONS} correct answers! </div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
);

export default Result;