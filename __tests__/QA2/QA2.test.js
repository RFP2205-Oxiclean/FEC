/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import QuestionList from './../../src/components/questionsAndAnswers/questionList/QuestionList.jsx';


//these are fake questions to check without wasting get requests

let fakeQuestions = [{
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




  let fakeProductInfo = {
    "id": 40344,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
}





it('Should only load 2 questions on creation', () => {
  render (<div className="who">
        <QuestionList questions={fakeQuestions} productId={fakeProductInfo.id} product={fakeProductInfo} />
      </div>);

  expect(screen.getAllByTestId("individual-question").length).toBe(2);

});

it('Should load 3 questions on update', () => {

  render (<div className="who">
        <QuestionList questions={fakeQuestions} productId={fakeProductInfo.id} product={fakeProductInfo} />
      </div>);

    fireEvent.click()
  expect().toBe(3);

});














