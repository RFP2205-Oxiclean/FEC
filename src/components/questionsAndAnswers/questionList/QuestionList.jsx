import React from 'react';
import Question from  './question/Question.jsx'


class QuestionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadedQuestions : [],
            status: 'increase',
            amountOfQuestionsLoaded : 0,
        }
    }

    onComponentDidMount() {

    }

    loadMoreQuestions() {

        if (this.props.questions.length <= 2)
        {
            //dont exist
        } else if (this.props.questions - this.state.amountOfQuestionsLoaded < 2) {
            this.state.status = 'decrease'
            //contract
        } else if (this.props.questions - this.state.amountOfQuestionsLoaded >= 2) {
            //expand
        }


        this.state.amountOfQuestionsLoaded += 2;
        this.state.loadedQuestions = this.props.questions.slice(this.state.amountOfQuestionsLoaded)

        this.setState(JSON.parse(JSON.stringify(this.state)));
    }


    render () {
        return (
            <ul id ="question-list">
                {this.props.questions.map((question, index)=> {
                    return <Question question={question} key={index} productId={this.props.productId}/>
                })}
            </ul>)
    }
}

export default QuestionList;