import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar.jsx'
import AnswerList from './AnswerList/AnswerList.jsx';
import { url } from "../../../config/config.js";
import { API_KEY } from "../../../config/config.js";

class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            page : null,

        };
    }

    componentDidMount() {
        this.getQuestionList(this.props.product_id)
    }

    toggleDisplayImage() {

    }

    getQuestionList(id, pageNumber){
        //get all questions
       let endPoint = `${url}/qa/questions`;
        axios.get(endPoint, {
            params: {
            product_id: id,
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

    }


    render() {
        return (
            <div>
                <h1 id='title'>
                QUESTIONS & ANSWERS
                </h1>
                <SearchBar />
                <ul id ="question-list">
                   {this.state.questions.map((question, index)=> {
                        return (
                        <li className="question" key={index}>
                            <div className="question-content">
                                <p className="q-id">Q:</p>
                                <p className="q-text">{question.question_body}</p>
                                <div className="info-tab">
                                Helpful?
                                    <p className="helpful-event" >Yes ({question.question_helpfulness})</p>
                                |
                                    <p className="add-answer-vent" >Add Answer</p>
                                </div>
                            </div>
                            <AnswerList answers={question.answers}/>
                        </li>)
                    })}
                </ul>

            </div>
        )
    }



}

export default QuestionsAndAnswers;