import React, {Component} from 'react'
import './Component.css'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className = "quiz">
                <div className="question">
                <div className = 'text'>
                <h1>Question</h1>       
                <p>Which is the only mammal that can't jump?</p>
                </div>
                <div className="answer">
                    <button className='option'>Dog</button>
                    <button className='option'>Goat</button> 
                </div>
                <br/>
                <div className="answer">
                    <button className='option'>Elephant</button>
                    <button className='option'>Lion</button>
                </div>
                <br/>
                <div className="row">
                   <button className="prev">Previous</button>
                   <button className="next">Next</button>
                   <button className="quit">Quit</button>
                </div>
            </div>
            </div>
        );
    }
}