import React from  'react';

function Answer (props) {
  return (
    <div className="answer-content">
        <p className="a-id">A:</p>
        <p className="a-text">{this.props.body}</p>
        <div className="a-photos">
          <ul>

          </ul>
        </div>
        <div className="info-tab">
            <p className="user-info">by {this.props.user} - {this.props.date}</p>
            | Helpful?
            <p className="helpful-event" >Yes ({this.props.question_helpfulness})</p>
            |
            <p className="report-event" > Report </p>
        </div>
    </div>)
}

export default Answer;