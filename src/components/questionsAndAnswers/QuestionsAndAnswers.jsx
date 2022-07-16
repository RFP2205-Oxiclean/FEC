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
            }
        })
        .then((response) => {
            this.state.allQuestions = response.data.results;
            //console.log(this.state)
            this.setState(JSON.parse(JSON.stringify(this.state)));
        })
        .catch((err) => {
            console.error('error in getting all questions', err);
        })
    };



    displayUnfilteredQuestions (filter) {
        console.log(filter, 'filter')
        if (filter.length >= 3) {
            this.state.questions = this.state.allQuestions.filter((question)=>{
                if (question.question_body.indexOf(filter) !== -1) {
                    return true;
                }
                return false;
            })
            this.setState(JSON.parse(JSON.stringify(this.state)));
        } else if (this.state.filtered = true) {
            this.state.questions = this.state.allQuestions;
            this.state.filtered = false;
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
                <QuestionList questions={this.state.allQuestions} productId={this.props.product_id} />

            </div>
        )
    }



}

export default QuestionsAndAnswers;