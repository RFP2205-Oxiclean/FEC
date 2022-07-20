/** @jest-environment jsdom */
import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import SortDropdown from '../../src/components/ratingsReviews/SortDropdown.jsx';

import '@testing-library/jest-dom'

describe('SortOptions test', () => {
  it('should render', ()=> {
    const handleSortReviewsChangeSpy = jest.fn();
    const {getByTestId} = render(<SortDropdown handleSortReviewsChange = {handleSortReviewsChangeSpy}/>)
    const sortDropdown = getByTestId('sort-dropdown');
    expect(sortDropdown).toBeTruthy();
  })

  it('should contain a dropdown', () => {
    const handleSortReviewsChangeSpy = jest.fn();
    const {getByTestId} = render(<SortDropdown handleSortReviewsChange = {handleSortReviewsChangeSpy}/>)
    const sortDropdown = getByTestId('sort-options');
    expect(sortDropdown).toBeTruthy();
  })

  it('should have Helpful, Newest, and Relevant as sort options', () => {
    const handleSortReviewsChangeSpy = jest.fn();
    const {getByTestId} = render(<SortDropdown handleSortReviewsChange = {handleSortReviewsChangeSpy}/>)
    const sortDropdown = getByTestId('sort-dropdown');
    expect(sortDropdown.textContent).toContain('relevance');
    expect(sortDropdown.textContent).toContain('helpful');
    expect(sortDropdown.textContent).toContain('newest');
  })

  it('should default its sort option to "relevance"', () => {
    const handleSortReviewsChangeSpy = jest.fn();
    const {getByTestId} = render(<SortDropdown handleSortReviewsChange = {handleSortReviewsChangeSpy}/>)
    const sortDropdown = getByTestId('sort-dropdown');
    expect(sortDropdown.textContent).toContain('reviews, sorted by relevance')
  })

  it('should invoke a function to handle a new sort selection with the selected option', () => {
    const handleSortReviewsChangeSpy = jest.fn();
    const {getByTestId} = render(<SortDropdown handleSortReviewsChange = {handleSortReviewsChangeSpy}/>)
    fireEvent.change(getByTestId('sort-options'), {target: {value: 'newest'}})
    const optionNewest = getByTestId('select-option-newest');
    expect(optionNewest).toBeTruthy();
  })
})