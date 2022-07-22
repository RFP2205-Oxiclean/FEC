import React from 'react';
import Question from  './question/Question.jsx';
import MoreQuestions from './moreQuestions/MoreQuestions.jsx';
import AddQuestion from './addQuestion/AddQuestion.jsx';


class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.questionsToLoad  = 2;
        this.loadedQuestions = this.props.questions.slice(0,this.questionsToLoad);

        this.loadMoreStateList = ['nonexistant','decrease','increase'];
        this.state = {
            oldQuestions : [],
            oldLength : 0
        };
        this.state.amountOfQuestionsLoaded = this.loadedQuestions.length;
        this.state.oldQuestions = this.createArrayOfQuestionIds(this.props.questions)
        this.state.loadMoreState = this.getCurrentState();
    }

    getCurrentState() {
        if (this.props.questions.length > 0 && this.props.questions.length - this.state.amountOfQuestionsLoaded > 0 ) {
            return this.loadMoreStateList[2];
        } else if (this.props.questions.length <= this.questionsToLoad ) {
            return this.loadMoreStateList[0];
        } else {
            return this.loadMoreStateList[1];
        }
    }

    // sortQuestionsByHelpfulness(questions) {
    //     let result = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness)); //refactor without js sort
    //     return result;
    // }

    createArrayOfQuestionIds (listData) {
        let result = [];
        for(let i = 0; i < listData.length; i++) {
            result.push(listData[i].question_id);
        }
        return result;
    }

    compareArraysOfIds (one,two) {
        let result = true;
        if (one === undefined && two !== undefined) {
            return false;
        } else if (two === undefined && one !== undefined) {
            return false;
        } else if (one === undefined && two === undefined) {
            return true;
        } else if (one.length !== two.length) {
            return false;
        } else {
            for (let i = 0 ; i < one.length; i++) {
                if (one[i] !== two[i]) {
                    result = false;
                    return result;
                }
            }
        }
        return result;
    }


    componentDidUpdate(){
        if(!this.compareArraysOfIds(this.state.oldQuestions, this.createArrayOfQuestionIds(this.props.questions))){ //check to see that questions have updated, or dont change state,
            //has to check if questions have changed
            this.resetState();

        } else if (this.state.oldLength !== this.state.amountOfQuestionsLoaded) { // question expansion has changed
            this.state.oldLength = this.state.amountOfQuestionsLoaded;
            this.state.loadMoreState = this.getCurrentState();
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }
        //do check and resete
    }


// main function
    loadMoreQuestions() {
        if (this.props.questions.length <= this.questionsToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.props.questions.length - this.loadedQuestions.length <= this.questionsToLoad) { // decrease
            if (this.state.loadMoreState !== this.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.props.questions.length - this.state.amountOfQuestionsLoaded > this.questionsToLoad) { //increase
            this.loadMoreIncrease();
        }
    }

    loadMoreGone() {
        this.loadedQuestions = this.props.questions;
        this.state.amountOfQuestionsLoaded = this.loadedQuestions.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreDecrease() {
        this.loadedQuestions = this.props.questions;
        this.state.amountOfQuestionsLoaded = this.loadedQuestions.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state.oldQuestions = this.createArrayOfQuestionIds(this.props.questions);
        this.state.amountOfQuestionsLoaded = this.questionsToLoad;
        this.state.loadMoreState = this.getCurrentState();
        this.setState(JSON.parse(JSON.stringify(this.state)));
        this.loadedQuestions = this.props.questions.slice(0,this.questionsToLoad);
    }
    //hellper
    loadMoreIncrease() {
        let newSlice = this.props.questions.slice(0,this.state.amountOfQuestionsLoaded + this.questionsToLoad);
        this.loadedQuestions = newSlice;
        this.state.amountOfQuestionsLoaded = this.loadedQuestions.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }










    render () {
        return (
            <div>
                <div className="qc-wrapper">
                    <div id="question-container">
                        <ul id="question-list">
                            {this.loadedQuestions.map((question)=> {
                                return <Question question={question} key={question.question_id} data-testid="individual-question" productId={this.props.productId} product={this.props.product}/>
                            })}
                        </ul>
                    </div>
                    <MoreQuestions  loadMoreStateList={this.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreQuestions.bind(this)} />
                    <AddQuestion data-testid="add-question-button" productId={this.props.productId} product={this.props.product} />
                </div>
            </div>
            )
    }
}

export default QuestionList;