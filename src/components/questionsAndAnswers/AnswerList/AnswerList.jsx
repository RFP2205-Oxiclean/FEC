import React from 'react';
import Answer from './Answer/Answer.jsx'

class AnswerList extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        answerItems : [],
      }
    }

    onComponentDidMount() {
      loadAnswers(2)
    }

    loadAnswers (amount) {

    }

    render () {

    }




}


export default AnswerList;