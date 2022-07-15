import React from 'react';
import Question from  './question/Question.jsx'


class QuestionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render () {
        {console.log(this.props.productId, "this is in ql")}
        return (
            <ul id ="question-list">
                {this.props.questions.map((question, index)=> {
                    return <Question question={question} key={index} productId={this.props.productId}/>
                })}
            </ul>)
    }
}

export default QuestionList;