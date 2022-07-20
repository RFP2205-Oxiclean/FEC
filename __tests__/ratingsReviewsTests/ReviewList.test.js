/** @jest-environment jsdom */

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import ReviewList from '../../src/components/ratingsReviews/ReviewList.jsx';

describe('ReviewList Component', () => {

  it('should render ReviewList with no reviews', () => {
    const {getByTestId} = render(<ReviewList reviews = {[]}/>);
    const review_list = getByTestId('review-list-no-reviews');
    expect(review_list).toBeTruthy();
  })

  it('should render ReviewList when there are reviews', () => {
    const {getByTestId} = render(<ReviewList reviews = {
      [
        {
          body: '(1) this is a review body',
          date: '2022-07-19T00:00:00.000Z',
          helpfulness: 1,
          photos: [],
          rating: 1,
          recommend: true,
          response: null,
          review_id: 1275683,
          reviewer_name: 'React Test',
          summary: 'This review is a test using React testing library'
        },
        {
          body: '(2) this is a review body',
          date: '2022-07-19T00:00:00.000Z',
          helpfulness: 1,
          photos: [],
          rating: 1,
          recommend: true,
          response: null,
          review_id: 1275683,
          reviewer_name: 'React Test',
          summary: 'This review is a test using React testing library'
        }
      ]
    }/>);
    const review_list = getByTestId('review-list-with-reviews');
    expect(review_list).toBeTruthy();
  })

  it('should only show a "More Reviews" button when there are more than 2 reviews', () => {
    const {getByTestId} = render(<ReviewList reviews = {[
      {
        body: '(1) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      },
      {
        body: '(2) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      },
      {
        body: '(3) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    ]}/>)

    const moreReviewsButton = getByTestId('more-reviews-button');
    expect(moreReviewsButton).toBeTruthy();
  })
  it('should not show More Reviews button if there are 2 or less reviews', () => {
    const {queryByTestId} = render(<ReviewList reviews = {[]}/>);
    const moreReviewsButton = queryByTestId('more-reviews-button');
    expect(moreReviewsButton).toBeNull();
  })



  it('should expand by 2 more reviews when Show More is clicked', () => {
    const {getByTestId} = render(<ReviewList reviews = {[
      {
        body: '(1) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      },
      {
        body: '(2) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      },
      {
        body: '(3) this is a review body',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    ]}/>)

    const review_list = getByTestId('review-list-with-reviews');
    fireEvent.click(getByTestId('more-reviews-button'))
    expect((review_list).textContent).toContain('(3)');
  })

  it('should have a "ADD A REVIEW + " button even when there are no reviews', () => {
      const {getByTestId} = render(<ReviewList reviews = {[]}/>)

      const addReviewButton = screen.getByText('ADD A REVIEW +')

      expect(addReviewButton).toBeTruthy();
  })


})

