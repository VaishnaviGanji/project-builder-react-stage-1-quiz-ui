import React, {Component} from 'react'
import './Component.css'

export default class ReturnComponent extends Component {
    render() {
        return (
            <div className = 'result'>
                <div className = 'checkmark'></div>
                <div className = 'res-text'>Result</div>
                <div className="stats">
        <h2 className="statshead">You need more practice!</h2>
        <h2 className="statsscore">Your Score: 20%</h2>
        <div className="statsdetmarks">
            <div className="statsdetails">
            <span>Total number of questions</span>
            <span>Number of attempted questions</span>
            <span>Number of correct answers</span>
            <span>Number of wrong answers</span>
            </div> 
            <div className="statsmarks">
                <span>15</span>
                <span>9</span>
                <span>3</span>
                <span>6</span>
            </div>
        </div>
    </div>
    <div className="btnss">
        <button className="playagainbtn">Play Again</button>
        <button className="backbtn">Back to Home</button>
    </div>
            </div>
        )
    }
}