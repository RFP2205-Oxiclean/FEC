import React from 'react';
import Question from  './question/Question.jsx';
import MoreQuestions from './moreQuestions/MoreQuestions.jsx';
import AddQuestion from './addQuestion/AddQuestion.jsx';


class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.questionsToLoad  = 2;
        this.sortedByHelpful = this.sortQuestionsByHelpfulness(this.props.questions);
        this.state = this.initialStateValues();
        this.loadInitialQuestions();
    }

    initialStateValues () {
        let initState = {
            oldQuestions: JSON.stringify(this.sortedByHelpful),
            loadedQuestions : [],
            loadMoreStateList : ['nonexistant','decrease','increase'],
        }
        initState.loadMoreState = this.getCurrentState();
        return initState
    }

    getCurrentState() {
        if (this.props.questions.length > 0 && this.props.questions.length - this.questionsToLoad > 0 ) {
            return 'increase';
        } else if (this.props.questions.length === this.questionsToLoad ) {
            return 'nonexistant';
        }
    }

    sortQuestionsByHelpfulness(questions) {
        let result = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness));
        return result;
    }

    loadInitialQuestions () {
        for(let i = 0; i < this.questionsToLoad; i++) {
            this.state.loadedQuestions.push(this.sortedByHelpful[i]);
        }
        console.log(this.state.loadedQuestions)
    }


    componentDidUpdate() {
        this.sortedByHelpful = this.sortQuestionsByHelpfulness(this.props.questions);
        let propsString = JSON.stringify(this.sortedByHelpful);
            if(propsString  !== this.state.oldQuestions) {
                this.state.oldQuestions = propsString;
                this.loadInitialQuestions();
                this.setState(JSON.parse(JSON.stringify(this.state)));
                console.log(this.props.questions)
           }
    }

    loadMoreGone() {
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedQuestions = this.sortedByHelpful;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedQuestions = this.sortedByHelpful;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues();
        this.setState(JSON.parse(JSON.stringify(this.state)));
        this.loadMoreQuestions();
    }

    loadMoreIncrease() {
        let newSlice = this.sortedByHelpful.slice(0,this.state.loadedQuestions.length + this.questionsToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.loadedQuestions = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }




    // main function
    loadMoreQuestions(initialStep) {
        if (this.sortedByHelpful.length <= this.questionsToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.sortedByHelpful.length - this.state.loadedQuestions.length <= this.questionsToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.sortedByHelpful.length - this.state.loadedQuestions.length > this.questionsToLoad) { //increase
            this.loadMoreIncrease();
        }
    }





    render () {
        return (
            <div>
                <div className="qc-wrapper">
                    <div id="question-container">
                        <ul id="question-list">
                            {this.state.loadedQuestions.map((question, index)=> {
                                return <Question question={question} key={index} productId={this.props.productId} />
                            })}
                        </ul>
                            {console.log(this.props.questions)}
                    </div>
                    <MoreQuestions loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreQuestions.bind(this)}/>
                    <AddQuestion productId={this.props.productId} />
                </div>

            </div>
            )
    }
}

export default QuestionList;