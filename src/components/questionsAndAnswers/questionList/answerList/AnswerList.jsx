import React from 'react';
import Answer from './answer/Answer.jsx'
import MoreAnswers from  './moreAnswers/MoreAnswers.jsx';

class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.arrayifiedAnswers = this.arrayifyAnswers(this.props.answers);
        this.sortedByHelpful = this.sortAnswersByHelpfulness(this.arrayifiedAnswers);
        this.state =  this.initialStateValues();
    }

    pushAnswersIntoArray

    initialStateValues () {
        return {
            oldAnswers: JSON.stringify(this.sortedByHelpful),
            loadedAnswers : [],
            loadMoreState: 'nonexistant',
            answersToLoad : 2,
            loadMoreStateList : ['nonexistant','decrease','increase'],
        }
    }

    arrayifyAnswers(answers) {
        let result = []
        for (let item in answers) {
            result.push(answers[item])
        }
        return result;
    }

    sortAnswersByHelpfulness(answers) {
        return answers.sort((a,b)=>{
            if((a.answerer_name === "Seller" && b.answerer_name === "Seller") || (a.answerer_name !== "Seller" && b.answerer_name !== "Seller") ) {
                return b.helpfulness - a.helpfulness
            }
            if (a.answerer_name === "Seller"){
                return -1
            } else if (b.answerer_name === "Seller"){
                return 1
            }
        })
    }

    componentDidMount() {
        this.loadMoreAnswers();
    }



    //optimizations to be done : do not stringify answers, no need to compare to different answers (unless also checking reported and removing).



    componentDidUpdate() {
        this.sortedByHelpful = this.sortAnswersByHelpfulness(this.arrayifyAnswers(this.props.answers));
        let ansString = JSON.stringify(this.sortedByHelpful)
        if(ansString  !== this.state.oldAnswers) {
            this.state.oldAnswers = ansString;
            this.loadMoreAnswers();
        }
    }

    loadMoreGone() {
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedAnswers = this.sortedByHelpful;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedAnswers = this.sortedByHelpful;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues()
        this.setState(JSON.parse(JSON.stringify(this.state)));
        this.loadMoreAnswers();
    }

    loadMoreIncrease() {
        let newSlice = this.sortedByHelpful.slice(0,this.state.loadedAnswers.length + this.state.answersToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.loadedAnswers = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }





    loadMoreAnswers() {
        if (this.sortedByHelpful.length <= this.state.answersToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.sortedByHelpful.length - this.state.loadedAnswers.length <= this.state.answersToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.sortedByHelpful.length - this.state.loadedAnswers.length > this.state.answersToLoad) { //increase
            this.loadMoreIncrease();
        }
    }



    render () {
        return (
            <div>
                <ul className="answer-list">
                    {this.state.loadedAnswers.map((item, index) => {
                        return <Answer data-testid="individual-answer" data={item} key={index}/>
                    })}
                </ul>
                <MoreAnswers loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} data-testid="more-answers-button" clickHandler={this.loadMoreAnswers.bind(this)} />
            </div>)

    }




}


export default AnswerList;