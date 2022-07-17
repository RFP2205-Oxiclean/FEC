import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar/SearchBar.jsx'
import AnswerList from './questionList/answerList/AnswerList.jsx';
import QuestionList from './questionList/QuestionList.jsx';
import { url, API_KEY } from "../../../config/config.js";
axios.defaults.headers.common['Authorization'] = API_KEY;


class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            allQuestions :[],
            page : null,

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
            }
        })
        .then((response) => {
            this.state.allQuestions = response.data.results;
            this.displayUnfilteredQuestions('');
            console.log(response, 'get qs')
            this.setState(JSON.parse(JSON.stringify(this.state)));
        })
        .catch((err) => {
            console.error('error in getting all questions', err);
        })
    };



    displayUnfilteredQuestions (filter) {
        let tooSmallFilterLength = 3;
        let lowerCaseFilter = filter.toLowerCase()
        console.log(filter, 'filter')
        console.log(this.state.allQuestions, 'what')
        if (filter.length >= tooSmallFilterLength) {
            this.state.questions = this.state.allQuestions.filter((question)=>{
                console.log(typeof question.question_body, "qbbbbbb")
                if (question.question_body.toLowerCase().indexOf(lowerCaseFilter) !== -1) {
                    console.log("calling me ");
                    return true;

                }
                return false;
            })
            this.setState(JSON.parse(JSON.stringify(this.state)));
        } else {
            this.state.questions = this.state.allQuestions;
            this.setState(JSON.parse(JSON.stringify(this.state)));
        }


    }




    render() {
        return (
            <div id="qa-container">
                <h1 className='qa-title'>
                QUESTIONS & ANSWERS
                </h1>
                <SearchBar eventHandler={this.displayUnfilteredQuestions.bind(this)}/>
                <QuestionList questions={this.state.questions} productId={this.props.product_id} />

            </div>
        )
    }



}

export default QuestionsAndAnswers;