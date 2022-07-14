import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar.jsx'
import AnswerList from './QuestionList/AnswerList/AnswerList.jsx';
import QuestionList from './QuestionList/QuestionList.jsx';
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
            page : pageNumber || 1,
            count : 2
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
        //while results > 0 and have not found a match keep turning pages until we find it
    }


    render() {
        return (
            <div>
                <h1 id='title'>
                QUESTIONS & ANSWERS
                </h1>
                <SearchBar />
                <QuestionList questions={this.state.questions} />

            </div>
        )
    }



}

export default QuestionsAndAnswers;