import React from 'react';
import AnswerList from '../answerList/AnswerList.jsx';
import InfoTab from './infoTab/InfoTab.jsx';

class Question extends React.Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  }

  render () {
    {console.log(props, "in quews")}
    return (
        <li className="question">
            <div className="question-content">
                <p className="q-id">Q:</p>
                <p className="q-text">{this.props.question.question_body}</p>
                <InfoTab question={this.props.question} />
            </div>
            <AnswerList answers={this.props.question.answers}/>
        </li>)
  }

}

export default Question;