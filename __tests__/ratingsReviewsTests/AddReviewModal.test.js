/** @jest-environment jsdom */
import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import AddReviewModal from '../../src/components/ratingsReviews/AddReviewModal.jsx';

import '@testing-library/jest-dom'

describe('AddReviewModal tests', () => {
  it('should render', () => {
    const {getByTestId} = render(<AddReviewModal metadata={{
      ratings: {},
      recommended: {},
      characteristics: {
        Size: 1,
        Quality: 1,
        Comfort: 1,
        Fit: 1,
        Length: 1,
        Width: 1

      }
    }}/>);
    const addReviewModal = getByTestId('add-review-modal')
    expect(addReviewModal).toBeTruthy();
  })
  it('should contain the product name', () => {
    const {getByTestId} = render(<AddReviewModal metadata={{
      ratings: {},
      recommended: {},
      characteristics: {
        Size: 1,
        Quality: 1,
        Comfort: 1,
        Fit: 1,
        Length: 1,
        Width: 1

      }
    }} product_id = {1} product_name = {'Jest Test'}/>);
    const addReviewModal = getByTestId('add-review-modal');
    expect(addReviewModal.textContent).toContain('Jest Test')
   })

   it('should submit a review when the user clicks the submit button', () => {
    const addReviewSpy = jest.fn();
    const {getByTestId} = render(<AddReviewModal metadata={{
      ratings: {},
      recommended: {},
      characteristics: {
        Size: 1,
        Quality: 1,
        Comfort: 1,
        Fit: 1,
        Length: 1,
        Width: 1

      }
    }} product_id = {1} product_name = {'Jest Test'} addReview = {addReviewSpy}/>);
    const submitReviewButton = getByTestId('addReview-submit-button')
    fireEvent.click(submitReviewButton);
    expect(addReviewSpy).toHaveBeenCalled();

   })

   it('should change the review body when a user enters information', () => {
    const {getByTestId} = render(<AddReviewModal metadata={{
      ratings: {},
      recommended: {},
      characteristics: {
        Size: 1,
        Quality: 1,
        Comfort: 1,
        Fit: 1,
        Length: 1,
        Width: 1

      }
    }} product_id = {1} product_name = {'Jest Test'}/>);

    const reviewBodyInput = getByTestId('addReview-body-change')
    const reviewBodyValue = 'jest test'
    fireEvent.change(reviewBodyInput, {target: {value: reviewBodyValue}})
    const addReviewModal = getByTestId('add-review-modal')
    expect(addReviewModal.textContent).toContain(reviewBodyValue);

   })

   it('should change the review summary when a user enters information', () => {
    const {getByTestId} = render(<AddReviewModal metadata={{
      ratings: {},
      recommended: {},
      characteristics: {
        Size: 1,
        Quality: 1,
        Comfort: 1,
        Fit: 1,
        Length: 1,
        Width: 1

      }
    }} product_id = {1} product_name = {'Jest Test'}/>);

    const reviewBodyInput = getByTestId('addReview-summary-change')
    const reviewBodyValue = 'jest test'
    fireEvent.change(reviewBodyInput, {target: {value: reviewBodyValue}})
    const addReviewModal = getByTestId('add-review-modal')
    expect(addReviewModal.textContent).toContain(reviewBodyValue);

   })

   it('should allow a user to add a picture', () => {
      const {getByTestId} = render(<AddReviewModal metadata={{
        ratings: {},
        recommended: {},
        characteristics: {
          Size: 1,
          Quality: 1,
          Comfort: 1,
          Fit: 1,
          Length: 1,
          Width: 1

        }
      }} product_id = {1} product_name = {'Jest Test'}/>);

      const reviewPictureAdd = getByTestId('addReview-picture-add')
      const reviewBodyValue = 'jest test'
      fireEvent.change(reviewBodyInput, {target: {value: reviewBodyValue}})
      const addReviewModal = getByTestId('add-review-modal')
      expect(addReviewModal.textContent).toContain(reviewBodyValue);

     })

     it('should change the review username when a user enters a username', () => {
      const {getByTestId} = render(<AddReviewModal metadata={{
        ratings: {},
        recommended: {},
        characteristics: {
          Size: 1,
          Quality: 1,
          Comfort: 1,
          Fit: 1,
          Length: 1,
          Width: 1

        }
      }} product_id = {1} product_name = {'Jest Test'}/>);

      const reviewEmailInput = getByTestId('addReview-email-input')
      const reviewBodyValue = 'jest test'
      fireEvent.change(reviewEmailInput, {target: {value: reviewBodyValue}})
      const addReviewModal = getByTestId('add-review-modal')
      expect(addReviewModal.textContent).toContain(reviewBodyValue);

     })
   })
