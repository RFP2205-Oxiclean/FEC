import React from 'react';
import axios from 'axios';
import { url } from "../../../config/config.js";
import { API_KEY } from "../../../config/config.js";

class QuestionsAndAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : null,
            page : null

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
            this.state.questions = response.data;
            this.setState(this.state);
        })
        .catch((err) => {
            console.error('Error in questionList response: ', err);
        })
    }


    searchQuestionList() {
        // unknown if search loaded or unloaded questions
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
                    {this.state.questions.map((question)=> {
                        return
                        (<li class="question">
                            <p class="q-id">Q:</>
                            <p class="q-content"></>
                            <></>
                        </li>)
                    })}
                </ul>

            </div>
        )
    }



}

export default QuestionsAndAnswers;