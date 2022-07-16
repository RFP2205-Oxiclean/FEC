import React from 'react';
import Question from  './question/Question.jsx';
import MoreQuestions from './moreQuestions/MoreQuestions.jsx';


class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialStateValues();
    }

    initialStateValues () {
        return {
            oldQuestions: JSON.stringify(this.props.questions),
            loadedQuestions : [],
            loadMoreState: 'nonexistant',
            amountOfQuestionsLoaded : 0,
            questionsToLoad : 2,
            loadMoreStateList : ['nonexistant','decrease','increase'],
        }
    }



    componentDidUpdate() {
        let propsString = JSON.stringify(this.props.questions);
        if(this.state.amountOfQuestionsLoaded < 1 || propsString  !== this.state.oldQuestions) {
            console.log('rerender')
            this.state.oldQuestions = propsString;
            this.loadMoreQuestions();
        }
    }

    loadMoreGone() {
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedQuestions = this.props.questions;
        if (this.props.questions.length !== 0 ) {
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedQuestions = this.props.questions;
        this.state.amountOfQuestionsLoaded = this.props.questions.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues()
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreIncrease() {
        let newSlice = this.props.questions.slice(0,this.state.amountOfQuestionsLoaded + this.state.questionsToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.amountOfQuestionsLoaded = newSlice.length;
        this.state.loadedQuestions = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }





    loadMoreQuestions() {
        if (this.props.questions.length <= this.state.questionsToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.props.questions.length - this.state.amountOfQuestionsLoaded <= this.state.questionsToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.props.questions.length - this.state.amountOfQuestionsLoaded > this.state.questionsToLoad) { //increase
            this.loadMoreIncrease();
        }
    }



    render () {
        return (
            <div>
                <ul id ="question-list">
                    {this.state.loadedQuestions.map((question, index)=> {
                        return <Question question={question} key={index} productId={this.props.productId}/>
                    })}
                </ul>
                <MoreQuestions loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreQuestions.bind(this)}/>
            </div>)
    }
}

export default QuestionList;