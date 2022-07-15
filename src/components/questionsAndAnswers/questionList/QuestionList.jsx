import React from 'react';
import Question from  './question/Question.jsx'


class QuestionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render () {
        return (
            <ul id ="question-list">
                {this.props.questions.map((question, index)=> {
                    return <Question question={question} key={index}/>
                })}
            </ul>)
    }
}

export default QuestionList;