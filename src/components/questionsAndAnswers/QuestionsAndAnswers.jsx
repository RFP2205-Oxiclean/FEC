import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar/SearchBar.jsx'
import AnswerList from './questionList/answerList/AnswerList.jsx';
import QuestionList from './questionList/QuestionList.jsx';
import { url } from "../../../config/config.js";
import { API_KEY } from "../../../config/config.js";

class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            allQuestions :[],
            page : null,
            filtered : false

        };
    }

    componentDidMount() {
        this.getAllQuestions(this.props.product_id)
    }


    getAllQuestions (id) {
        let endPoint = `${url}/qa/questions`;
        axios.get(endPoint, {
            params: {
            product_id: id,
            page : 1,
            count : 9999
            },
            headers: {
            Authorization: API_KEY
            }
        })
        .then((response) => {
            this.state.allQuestions = response.data.results;
            this.sortQuestionsByHelpfulness()
            console.log(this.state)
            this.setState(this.state);
        })
        .catch((err) => {
            console.error('error in getting all questions', err);
        })
    };

    sortQuestionsByHelpfulness() {
        let results = []
        this.state.allQuestions.sort((a,b)=>{
                if (a.question_helpfulness > b.question_helpfulness) {
                    results.push(a);
                    return a;
                } else {
                    results.push(b)
                    return b;
                }
            })
        this.state.questions = results;
    }


    displayUnfilteredQuestions (filter) {
        console.log(filter, 'filter')
        if (filter.length >= 3) {
            this.state.questions = this.state.allQuestions.filter((question)=>{
                if (question.question_body.indexOf(filter) !== -1) {
                    return true;
                }
                return false;
            })
            this.setState(this.state);
        } else if (this.state.filtered = true) {
            this.state.questions = this.state.allQuestions;
            this.state.filtered = false;
            this.setState(this.state);
        }

    }


    searchQuestionList() {
        //while results > 0 and have not found a match keep turning pages until we find it
    }


    render() {
        return (
            <div>
                <h1 id='title'>
                QUESTIONS & ANSWERS
                </h1>
                <SearchBar eventHandler={this.displayUnfilteredQuestions.bind(this)}/>
                <QuestionList questions={this.state.questions} />

            </div>
        )
    }



}

export default QuestionsAndAnswers;