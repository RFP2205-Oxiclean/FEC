import React from 'react';
import axios from 'axios';
import { url } from "../../../config/config.js";
import { API_KEY } from "../../../config/config.js";

class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            page : null,
            loadedAnswerCountByReview : []

        };
    }

    componentDidMount() {
        this.getQuestionList(this.props.product_id)
    }

    getQuestionList(id, pageNumber){
        //get all questions
       let endPoint = `${url}/qa/questions`;
        axios.get(endPoint, {
            params: {
            product_id: id,
            count: 2,
            page : pageNumber || 1
            },
            headers: {
            Authorization: API_KEY
            }
        })
        .then((response) => {
            console.log(response.data, 'data in questionList');
            this.state.questions = response.data.results;
            this.setState(this.state);
        })
        .catch((err) => {
            console.error('Error in questionList response: ', err);
        })
    }


    searchQuestionList() {
        // unknown if search loaded or unloaded questions
    }

    loadQuestions (questionId, ) {

    }

    render() {
        return (
            <div>
                <h1 id='title'>
                QUESTIONS & ANSWERS
                </h1>
                <form>
                    <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
                    <input type="submit"/>
                </form>
                <ul id ="question-list">
                   {this.state.questions.map((question, index)=> {
                        return (
                        <li className="question" key={index}>
                            <div className="question-content">
                                <p className="q-id">Q:</p>
                                <p className="q-text">{question.question_body}</p>
                                <div className="info-tab">
                                    <p className="helpful-num">Helpful?
                                        <p className="helpful-event" >Yes ({question.question_helpfulness})</p>
                                    |
                                        <p className="add-answer-vent" >Add Answer</p>
                                    </p>
                                </div>
                            </div>
                            {Object.keys(question.answers).map((key , index)=>{
                                if (index < )
                                return (
                                <div className="answer-content">
                                    <p className="a-id">A:</p>
                                    <p className="a-text">{question.answers[key].body}</p>
                                    <div className="info-tab">
                                        <p className="user-info">by {question.answers[key].user} - {question.answers[key].date}</p>
                                        |
                                        <p className="helpful-num">Helpful?
                                            <p className="helpful-event" >Yes ({question.answers[key].question_helpfulness})</p>
                                        |
                                            <p className="report-event" > Report </p>
                                        </p>
                                    </div>
                                </div>)
                            })}
                        </li>)
                    })}
                </ul>

            </div>
        )
    }



}

export default QuestionsAndAnswers;