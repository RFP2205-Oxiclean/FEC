import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';

class Question extends React.Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  }

  render () {
    return (
        <li className="question">
            <div className="question-content">
                <p className="q-id">Q:</p>
                <p className="q-text">{this.props.question.question_body}</p>
                <div className="info-tab">
                Helpful?
                    <p className="helpful-event" >Yes ({this.props.question.question_helpfulness})</p>
                |
                    <p className="add-answer-vent" >Add Answer</p>
                </div>
            </div>
            <AnswerList answers={this.props.question.answers}/>
        </li>)
  }

}

export default Question;