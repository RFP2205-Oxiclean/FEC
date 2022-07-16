import React from 'react';
import Question from  './question/Question.jsx';
import MoreQuestions from './moreQuestions/MoreQuestions.jsx';


class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedQuestions : [],
            loadMoreState: 'nonexistant',
            amountOfQuestionsLoaded : 0,
            questionsToLoad : 2,
            loadMoreStateList : ['nonexistant','decrease','increase']
        };
        const defaultStateItem = JSON.parse(JSON.stringify(this.state));
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        this.loadMoreQuestions();
    }

    // loadInitialQuestions() {

    //     console.log("sadeg", this.props );
    //     for (var i = 0; i < this.state.questionsToLoad && i < this.props.questions.length; i++ ) {
    //         this.state.loadedQuestions.push(this.props.questions[i]);
    //     }
    //     this.state.amountOfQuestionsLoaded = i;
    //     this.setState(JSON.parse(JSON.stringify(this.state)));
    // }

    loadMoreQuestions() {
        if (this.state.loadedQuestions.length !== 0) {
            if (this.props.questions.length <= this.state.questionsToLoad) { //dont exist
                    console.log("why0", this.props ,this.props.questions.length, this.state.questionsToLoad);
                    this.state.loadMoreState = this.state.loadMoreStateList[0];
                    this.state.loadedQuestions = this.props.questions;
                    this.setState(JSON.parse(JSON.stringify(this.state)));
                } else if (this.props.questions.length - this.state.amountOfQuestionsLoaded < this.state.questionsToLoad) { // decrease
                    console.log("why1");
                    if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                        this.state.loadMoreState = this.state.loadMoreStateList[1];
                        this.state.loadedQuestions = this.props.questions;
                        this.state.amountOfQuestionsLoaded = this.props.questions.length;
                        this.setState(JSON.parse(JSON.stringify(this.state)));
                    } else {
                        console.log("firstcall");
                        this.setState(this.defaultStateItem);
                        this.loadInitialQuestions();
                    }
                } else if (this.props.questions.length - this.state.amountOfQuestionsLoaded >= this.state.questionsToLoad) { //increase
                    console.log("why2");
                    if (this.state.loadMoreState !== this.state.loadMoreStateList[2]) {
                    let questionCopy = this.props.questions.slice();
                    let newSlice = questionCopy.slice(0,this.state.questionsToLoad);
                    console.log(newSlice, "new slie", this.state.questionsToLoad);
                    this.state.loadMoreState = this.state.loadMoreStateList[2];
                    this.state.amountOfQuestionsLoaded += newSlice.length;
                    this.state.loadedQuestions = newSlice;
                    this.setState(JSON.parse(JSON.stringify(this.state)));
                    }
                }
            }
        console.log("helooo")



    }


    render () {
        console.log(this.props.questions, 'lq')
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