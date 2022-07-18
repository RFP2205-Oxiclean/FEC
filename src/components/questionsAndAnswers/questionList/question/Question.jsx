import React from 'react';
import AnswerList from '../answerList/AnswerList.jsx';
import InfoTab from './infoTab/InfoTab.jsx';
import axios from 'axios';
import { API_KEY, url } from "../../../../../config/config.js";

    class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHelpful: true,
            answerActive: false
        }
    }

    sendHelpful () {
        if (this.state.activeHelpful) {
            let endPoint = `${url}/qa/questions/${this.props.question.question_id}/helpful`;
            let newAxios = axios.create({
                 headers : {'Authorization' : API_KEY}
            })
            newAxios.put(endPoint, {
                params: {
                    question_id:this.props.question.question_id,
                }
            })
            .then((res) => {
                this.state.activeHelpful = false;
                this.setState(JSON.parse(JSON.stringify(this.state)));
            })
            .catch((err) => {
                console.error("err in helpful marking infoTab", err)
            })
        }

    }

    sendAnswer(){

    }

    render () {
       return (
            <li className="question">
                <div className="question-content">
                    <p className="q-id">Q:</p>
                    <p className="q-text">{this.props.question.question_body}</p>
                    <InfoTab question={this.props.question} sendHelpful={this.sendHelpful.bind(this)} productId={this.props.productId} activeHelpful={this.state.activeHelpful} />
                </div>
                <AnswerList answers={this.props.question.answers}  />
            </li>)

    }

    }

export default Question;