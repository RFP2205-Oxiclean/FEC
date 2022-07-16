import React from 'react';
import Question from  './question/Question.jsx';
import MoreQuestions from './moreQuestions/MoreQuestions.jsx';


class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.sortedByHelpful = this.sortQuestionsByHelpfulness(this.props.questions);
        console.log(this.props.questions, 'qqqq');
        this.state = this.initialStateValues();

    }

    initialStateValues () {
        return {
            oldQuestions: JSON.stringify(this.sortedByHelpful),
            loadedQuestions : [],
            loadMoreState: 'nonexistant',
            amountOfQuestionsLoaded : 0,
            questionsToLoad : 2,
            loadMoreStateList : ['nonexistant','decrease','increase'],
        }
    }

    sortQuestionsByHelpfulness(questions) {
        let result = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness));
        console.log(result, 'resxsult', this.props.questions)
        return result;
    }



    componentDidUpdate() {
        this.sortedByHelpful = this.sortQuestionsByHelpfulness(this.props.questions);
        let propsString = JSON.stringify(this.sortedByHelpful);
        if(this.state.amountOfQuestionsLoaded < 1 || propsString  !== this.state.oldQuestions) {
            console.log('rerender')
            this.state.oldQuestions = propsString;
            this.loadMoreQuestions();
        }
    }

    loadMoreGone() {
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedQuestions = this.sortedByHelpful;
        if (this.sortedByHelpful.length !== 0 ) {
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedQuestions = this.sortedByHelpful;
        this.state.amountOfQuestionsLoaded = this.sortedByHelpful.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues()
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreIncrease() {
        let newSlice = this.sortedByHelpful.slice(0,this.state.amountOfQuestionsLoaded + this.state.questionsToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.amountOfQuestionsLoaded = newSlice.length;
        this.state.loadedQuestions = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }





    loadMoreQuestions() {
        if (this.sortedByHelpful.length <= this.state.questionsToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.sortedByHelpful.length - this.state.amountOfQuestionsLoaded <= this.state.questionsToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.sortedByHelpful.length - this.state.amountOfQuestionsLoaded > this.state.questionsToLoad) { //increase
            this.loadMoreIncrease();
        }
    }



    render () {
        return (
            <div>
                <ul id ="question-list">
                    {this.state.loadedQuestions.map((question, index)=> {
                        return <Question question={question} key={index} productId={this.props.productId} />
                    })}
                </ul>
                <MoreQuestions loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreQuestions.bind(this)}/>
            </div>)
    }
}

export default QuestionList;