import React from 'react';
import AnswerList from '../answerList/AnswerList.jsx';
import InfoTab from './infoTab/InfoTab.jsx';
import axios from 'axios';
import { API_KEY, url } from "../../../../../config/config.js";

    class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
            answerActive: false
        }
    }

    sendHelpful = () => {
        console.log(this.props.question.question_id);
        if (this.state.active) {
            let endPoint = `${url}/qa/questions/${this.props.question.question_id}/helpful`;
            axios.put(endPoint, {
                params: {
                    question_id:this.props.question.question_id,
                }
            })
            .then((res) => {
                console.log("marked helpful");
                this.state.active = false;
                this.setState(this.state);
            })
            .catch((err) => {
                console.error("err in helpful marking infoTab", err)
            })
        }

    }

    addAnswer(){

    }

    render () {
       return (
            <li className="question">
                <div className="question-content">
                    <p className="q-id">Q:</p>
                    <p className="q-text">{this.props.question.question_body}</p>
                    <InfoTab question={this.props.question} sendHelpful={this.sendHelpful.bind(this)} productId={this.props.productId}/>
                </div>
                <AnswerList answers={this.props.question.answers}/>
            </li>)

    }

    }

export default Question;