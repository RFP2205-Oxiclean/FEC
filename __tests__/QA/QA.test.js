import 'jsdom-global/register';
import React from 'react';
import { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionList from './../../src/components/questionsAndAnswers/questionList/QuestionList.jsx';


//preconfig for adaptor
configure({ adapter: new Adapter() });


//this is a live id to check modal
const live_id = 40344;


//these are fake questions to check without wasting get requests

let realQuestions = [{
  "question_id": 642148,
  "question_body": "Do you know the muffin man?",
  "question_date": "2022-07-18T00:00:00.000Z",
  "asker_name": "Mickey",
  "question_helpfulness": 29,
  "reported": false,
  "answers": {
      "5986719": {
          "id": 5986719,
          "body": "Who is it Eren?",
          "date": "2022-07-18T00:00:00.000Z",
          "answerer_name": "Armin Alert",
          "helpfulness": 9,
          "photos": []
      },
      "5986728": {
          "id": 5986728,
          "body": "I should've been the founding titan.",
          "date": "2022-07-18T00:00:00.000Z",
          "answerer_name": "Santa Titan",
          "helpfulness": 13,
          "photos": [
              "http://res.cloudinary.com/dtoqwbb6x/image/upload/v1658182584/klz62ifp0ha9u3ssqrnc.webp"
          ]
      },
      "5986731": {
          "id": 5986731,
          "body": "Yoooo Santa Titan just joined the thread",
          "date": "2022-07-18T00:00:00.000Z",
          "answerer_name": "Ab Titan",
          "helpfulness": 3,
          "photos": [
              "http://res.cloudinary.com/dkzeszwgm/image/upload/v1658184216/FEC_folder/gxfgdtue5tgc3vwsdplg.jpg"
          ]
      },
      "5986748": {
          "id": 5986748,
          "body": "I am the Cleaning Titan",
          "date": "2022-07-19T00:00:00.000Z",
          "answerer_name": "Levi Ackerman",
          "helpfulness": 12,
          "photos": [
              "http://res.cloudinary.com/dkzeszwgm/image/upload/v1658194421/FEC_folder/fkthckhcsgwuzzd7mjxk.jpg"
          ]
      }
  }
},{
  "question_id": 592770,
  "question_body": "jhgvfhghgf",
  "question_date": "2022-04-07T00:00:00.000Z",
  "asker_name": "jhvjhgvgjh",
  "question_helpfulness": 7,
  "reported": false,
  "answers": {
      "5985717": {
          "id": 5985717,
          "body": "jhgvfhghgf is awesome!!",
          "date": "2022-05-31T00:00:00.000Z",
          "answerer_name": "sky",
          "helpfulness": 1,
          "photos": []
      },
      "5985821": {
          "id": 5985821,
          "body": "the size is perfect. it is so comfortable. ",
          "date": "2022-05-31T00:00:00.000Z",
          "answerer_name": "1234",
          "helpfulness": 4,
          "photos": [
              "http://res.cloudinary.com/dgn6fimlv/image/upload/v1654032328/ihdowko0when99ovlfln.jpg",
              "http://res.cloudinary.com/dgn6fimlv/image/upload/v1654032328/bcxqo5b58fa2s6djobvm.jpg",
              "http://res.cloudinary.com/dgn6fimlv/image/upload/v1654032328/tylea1abtquz0abyuvrq.jpg"
          ]
      },
      "5986749": {
          "id": 5986749,
          "body": "Need some stew here too",
          "date": "2022-07-19T00:00:00.000Z",
          "answerer_name": "stewster",
          "helpfulness": 0,
          "photos": [
              "http://res.cloudinary.com/dccmwc25m/image/upload/v1658198382/b9gtsd6du2aoztp1igyo.png",
              "http://res.cloudinary.com/dccmwc25m/image/upload/v1658198380/r8gnggll2ih5skhb8bq4.jpg"
          ]
      },
      "5986750": {
          "id": 5986750,
          "body": "Need more food",
          "date": "2022-07-19T00:00:00.000Z",
          "answerer_name": "hungers",
          "helpfulness": 0,
          "photos": [
              "http://res.cloudinary.com/dccmwc25m/image/upload/v1658198518/luhpg2hh45zqixpe7qir.jpg"
          ]
      }
  }
},{
  "question_id": 573515,
  "question_body": "Does this come in chainmail?",
  "question_date": "2022-02-22T00:00:00.000Z",
  "asker_name": "Din",
  "question_helpfulness": 3,
  "reported": false,
  "answers": {}
}

]




let fakeQuestions = [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": ['https://res.cloudinary.com/dky0ccpc4/image/upload/v1658175113/yptuq6xrinasysguxrdv.jpg']
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },{
        "question_id": 39,
        "question_body": "who am i ?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "guy",
        "question_helpfulness": 5,
        "reported": false,
        "answers": {
          700: {
            "id": 700,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 4,
            "photos": [],
          },
          780: {
            "id": 780,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 99,
            "photos": [],
          }
        }
      }

  ]


 const component = mount(<div className="who">
      <QuestionList questions={realQuestions} productId={live_id}/>
    </div>);


it('Should only load 2 questions on creation', () => {


  expect(component.find('#question-list').children().length).toBe(2);
  //component.unmount();

});

it('Should load 3 questions on update', () => {


  expect(component.find('#question-list').children().length).toBe(3);
  //component.unmount();

});





















