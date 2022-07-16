import React from 'react';
import Answer from './answer/Answer.jsx'
import MoreAnswers from  './moreAnswers/MoreAnswers.jsx';

class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.state =  this.initialStateValues();
        this.currentAnswers = null;
    }

    pushAnswersIntoArray

    initialStateValues () {
        return {
            oldAnswers: JSON.stringify(this.arrayifyAnswers(this.props.answers)),
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

    componentDidMount() {
        this.currentAnswers = this.arrayifyAnswers(this.props.answers);
        this.loadMoreAnswers();
        //console.log(this.props.answers.length)
    }



    componentDidUpdate() {
        this.currentAnswers = this.arrayifyAnswers(this.props.answers);
        let ansString = JSON.stringify(this.currentAnswers)
        console.log(this.currentAnswers.length, 'here');
        if(this.state.amountOfAnswersLoaded < 1  && this.currentAnswers.length > 0) {
            this.state.oldAnswers = ansString;
            this.loadMoreAnswers();
        }
    }

    loadMoreGone() { //array FN is a function to turn whatever you have into an array
        this.state.loadMoreState = this.state.loadMoreStateList[0];
        this.state.loadedAnswers = this.currentAnswers;
        if (this.currentAnswers.length !== 0 ) {
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }
    }

    loadMoreDecrease() {
        this.state.loadMoreState = this.state.loadMoreStateList[1];
        this.state.loadedAnswers = this.currentAnswers;
        this.state.amountOfAnswersLoaded = this.currentAnswers.length;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    resetState() {
        this.state = this.initialStateValues()
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }

    loadMoreIncrease() {
        let newSlice = this.currentAnswers.slice(0,this.state.amountOfAnswersLoaded + this.state.answersToLoad);
        this.state.loadMoreState = this.state.loadMoreStateList[2];
        this.state.amountOfAnswersLoaded = newSlice.length;
        this.state.loadedAnswers = newSlice;
        this.setState(JSON.parse(JSON.stringify(this.state)));
    }





    loadMoreAnswers() {
        console.log(this.currentAnswers.length, 'current ans',this.state.answersToLoad, 'ans to load' )
        if (this.currentAnswers.length <= this.state.answersToLoad) { //dont exist
                this.loadMoreGone();
        } else if (this.currentAnswers.length - this.state.amountOfAnswersLoaded <= this.state.answersToLoad) { // decrease
            if (this.state.loadMoreState !== this.state.loadMoreStateList[1]) {
                this.loadMoreDecrease();
            } else {
                this.resetState();
            }
        } else if (this.currentAnswers.length - this.state.amountOfAnswersLoaded > this.state.answersToLoad) { //increase
            this.loadMoreIncrease();
        }
    }






    // componentDidMount() {
    //     this.loadAnswers(this.state.answersToLoad);
    //     console.log(this.state, 'mounted answers', this.props.answers)
    // }
    // componentDidUpdate() {
    //     console.log(this.state, 'a state', this.props.answers)
    // }


        // componentWillUnmount(){
        //     this.state = {
        //         loadedAnswers : []
        //     }
        //     this.setState(JSON.parse(JSON.stringify(this.state)));
        // }


    render () {
        return (
            <div>
                <ul className="answer-list">
                    {this.state.loadedAnswers.map((item, index) => {
                        return <Answer data={item} key={index}/>
                    })}
                </ul>
                <MoreAnswers loadMoreStateList={this.state.loadMoreStateList} loadMoreState={this.state.loadMoreState} clickHandler={this.loadMoreAnswers.bind(this)} />
            </div>)

    }




}


export default AnswerList;