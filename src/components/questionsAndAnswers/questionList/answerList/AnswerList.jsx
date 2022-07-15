import React from 'react';
import Answer from './answer/Answer.jsx'

class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            answersLoaded : [],
            defaultItems : 2
        }
    }

    componentDidMount() {
        this.loadAnswers(this.state.defaultItems);
    }

    componentWillUnmount(){
        this.state = {
            answersLoaded : []
        }
        this.setState(this.state);
    }


    loadAnswers (amount) {
        let currentIndex = this.props.answers.length;
        let keys = Object.keys(this.props.answers);
        for (let i = currentIndex; i < amount || i > keys.length-1 ; i++) {
            this.state.answersLoaded[keys[i]] += 1;
        }
        console.log(this.state, 'loading answers')
        this.setState(this.state)
    }


    render () {
        return (
            <ul className="answer-list">
                {Object.keys(this.props.answers).map((item, index) => {
                    return <Answer data={this.props.answers[item]} key={index}/>
                })}
            </ul>)
    }




}


export default AnswerList;