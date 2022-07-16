import React from 'react';
import Answer from './answer/Answer.jsx'
import MoreAnswers from  './moreAnswers/MoreAnswers.jsx';

class AnswerList extends React.Component {
    constructor(props) {
        super(props);

        this.arrayifiedAnswers = this.arrayifyAnswers(this.props.answers);
        this.sortedByHelpful = this.sortAnswersByHelpfulness(this.arrayifiedAnswers);
        console.log(this.sortedByHelpful, 'in ans lis')
        this.state =  this.initialStateValues();
    }

    pushAnswersIntoArray

    initialStateValues () {
        return {
            oldAnswers: JSON.stringify(this.sortedByHelpful),
            loadedAnswers : [],
            loadMoreState: 'nonexistant',
            amountOfAnswersLoaded : 0,
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
        return answers.sort((a,b)=>(b.helpfulness - a.helpfulness) )
    }

    componentDidMount() {
        this.loadMoreAnswers();
        //console.log(this.props.answers.length)
    }



    componentDidUpdate() {
        this.sortedByHelpful = this.sortAnswersByHelpfulness(this.arrayifyAnswers(this.props.answers));
        let ansString = JSON.stringify(this.sortedByHelpful)
        console.log(this.sortedByHelpful.length, 'here');
        if(this.state.amountOfAnswersLoaded < 1  && this.sortedByHelpful.length > 0) {
            this.state.oldAnswers = ansString;
            this.loadMoreAnswers();
        }
    }

    loadMoreGone() { //array FN is a function to turn whatever you have into an array
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedAnswers = this.sortedByHelpful;
        if (this.sortedByHelpful.length !== 0 ) {
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedAnswers = this.sortedByHelpful;
        this.state.amountOfAnswersLoaded = this.sortedByHelpful.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues()
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreIncrease() {
        let newSlice = this.sortedByHelpful.slice(0,this.state.amountOfAnswersLoaded + this.state.answersToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.amountOfAnswersLoaded = newSlice.length;
        this.state.loadedAnswers = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }





    loadMoreAnswers() {
        console.log(this.sortedByHelpful.length, 'current ans',this.state.answersToLoad, 'ans to load' )
        if (this.sortedByHelpful.length <= this.state.answersToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.sortedByHelpful.length - this.state.amountOfAnswersLoaded <= this.state.answersToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.sortedByHelpful.length - this.state.amountOfAnswersLoaded > this.state.answersToLoad) { //increase
            this.loadMoreIncrease();
        }
    }



    render () {
        return (
            <div>
                <ul className="answer-list">
                    {this.state.loadedAnswers.map((item, index) => {
                        return <Answer data={item} key={index} />
                    })}
                </ul>
                <MoreAnswers loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreAnswers.bind(this)} />
            </div>)

    }




}


export default AnswerList;