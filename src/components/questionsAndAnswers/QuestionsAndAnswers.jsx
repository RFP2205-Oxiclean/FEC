import React from "react";
import axios from "axios";
import SearchBar from "./searchBar/SearchBar.jsx";
import AnswerList from "./questionList/answerList/AnswerList.jsx";
import QuestionList from "./questionList/QuestionList.jsx";
import { url, API_KEY } from "../../../config/config.js";
import AddQuestion from './questionList/addQuestion/AddQuestion.jsx';
//axios.defaults.headers.common['Authorization'] = API_KEY;

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      allQuestions: [],
      product : null,
      page: null,
    };
  }

  componentDidMount() {
    if (this.props.fakeData === undefined) {
     this.getAllQuestions(this.props.product_id);
    this.getProductInformation(this.props.product_id);
    } else {
      this.state.questions = this.props.fake_questions;
      this.state.product = this.props.fake_product;
      this.displayUnfilteredQuestions("");
    }
  }


  getProductInformation(id) {
    let endPoint = `${url}/products/${this.props.product_id}`
        let newAxios = axios.create({
            headers : {'Authorization' : API_KEY}
       })
        newAxios.get(endPoint, {headers : {
            'Authorization' : API_KEY
        }})
        .then((res) => {
          this.state.product = res.data;
          console.log(res.data)
          this.setState(JSON.parse(JSON.stringify(this.state)));
          console.log(this.state.product)
        })
        .catch((err) => {
            console.error('Error in get Product Information', err);
        })
  }

  getAllQuestions(id) {
    let endPoint = `${url}/qa/questions`;
    let newAxios = axios.create({
      headers: { Authorization: API_KEY },
    });
    newAxios
      .get(endPoint, {
        params: {
          product_id: id,
          page: 1,
          count: 9999,
        },
      })
      .then((response) => {
        this.state.allQuestions = response.data.results;
        this.displayUnfilteredQuestions("");
        this.setState(JSON.parse(JSON.stringify(this.state)));
      })
      .catch((err) => {
        console.error("error in getting all questions", err);
        alert("your was rejected, please check all fields for erroneous inputs")
      });
  }

  displayUnfilteredQuestions(filter) {
    let tooSmallFilterLength = 3;
    let lowerCaseFilter = filter.toLowerCase();
    if (filter.length >= tooSmallFilterLength) {
      this.state.questions = this.state.allQuestions.filter((question) => {
        if (question.question_body.toLowerCase().indexOf(lowerCaseFilter) !== -1) {
          return true;
        }
        return false;
      });
      this.setState(JSON.parse(JSON.stringify(this.state)));
    } else {
      this.state.questions = this.state.allQuestions;
      this.setState(JSON.parse(JSON.stringify(this.state)));
    }
  }

  render() {
    //console.log(this.state.questions)
    let questionList = this.state.questions.length > 0 ? <QuestionList questions={this.state.questions} productId={this.props.product_id} product={this.state.product} /> : <AddQuestion productId={this.state.product_id} product={this.state.product} />
    return (
      <div id="qa-container">
        <h1 className="qa-title">QUESTIONS & ANSWERS</h1>
        <SearchBar eventHandler={this.displayUnfilteredQuestions.bind(this)} product={this.state.product}/>
        {questionList}

      </div>
    );
  }
}
export default QuestionsAndAnswers;
