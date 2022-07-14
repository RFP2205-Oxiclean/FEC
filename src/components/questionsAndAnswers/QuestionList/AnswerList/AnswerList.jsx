import React from 'react';
import Answer from './Answer/Answer.jsx'

class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            answerItems : [],
        }
    }

    componentDidMount() {
        this.loadAnswers(2);
    }

    componentDidUpdate() {
        this.answerChange(2)
    }

    loadAnswers (amount) {
        let currentIndex = this.state.answerItems.length;
        let keys = Object.keys(this.props.answers);
        for (let i = currentIndex; i < amount || i > keys.length-1 ; i++) {
            this.state.answerItems[i] = keys[i];
        }
        console.log(this.state, 'loading answers')
        this.setState(this.state)
    }

    answerChange (amount) {
        let currentIndex = this.state.answerItems.length;
        let keys = Object.keys(this.props.answers);
        for (let i = currentIndex; i < amount || i > keys.length-1 ; i++) {
            this.state.answerItems[i] = keys[i];
        }
    }

    render () {
        return (
            <ul>
                {this.state.answerItems.map((item, index) => {
                    return <Answer data={this.props.answers[item]} key={index}/>
                })}
            </ul>)
    }




}


export default AnswerList;