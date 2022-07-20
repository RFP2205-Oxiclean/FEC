/** @jest-environment jsdom */
import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import renderer from 'react-test-renderer'
import RatingsReviews from '../../src/components/ratingsReviews/RatingsReviews.jsx';

import '@testing-library/jest-dom'

describe('RatingsReviews tests', () => {
  it('should render', () => {
    const {getByTestId} = render(<RatingsReviews />)
    const ratingsReviews = getByTestId('ratings-reviews');
    expect(ratingsReviews).toBeTruthy();
  })

  it('should have a function that retrieves product information', () => {
    const {queryByTestId} = render(<RatingsReviews product_id = {1}/>)
    const getProductInfo = queryByTestId('get-information');
    const getProductHehe = queryByTestId('get-product-hehe');
    fireEvent.click(getProductInfo);
    expect(getProductInfo).toBeTruthy();
    expect(getProductHehe).not.toBeTruthy();
  })

  it('renders correctly', () => {
    const tree = renderer.create(<RatingsReviews />).toJSON();
    expect(tree).toMatchSnapshot();
  })



})