/** @jest-environment jsdom */
import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import KeywordSearchFilter from '../../src/components/ratingsReviews/KeywordSearchFilter.jsx';

import '@testing-library/jest-dom'

describe('Keyword Search Filter tests', () => {
  it ('should render', () => {
    const {getByTestId} = render(<KeywordSearchFilter/>)
    const keywordSearch = getByTestId('keyword-search-filter');
    expect(keywordSearch).toBeTruthy();
  })
  it('should clear keyword when button is clicked', () => {
    const handleKeywordChangeSpy = jest.fn();
    const {getByTestId} = render(<KeywordSearchFilter handleKeywordChange = {handleKeywordChangeSpy}/>)

    const clearSearch = getByTestId('clear-search-button');
    fireEvent.click(clearSearch);
    expect (handleKeywordChangeSpy).toHaveBeenCalled();

  })

  it('should update the filter keyword when the input field changes', () => {
    const handleKeywordChangeSpy = jest.fn();
    const {getByTestId} = render(<KeywordSearchFilter handleKeywordChange = {handleKeywordChangeSpy}/>)
    const inputWord = 'hi'
    const inputKeywordField = getByTestId('keyword-search-input');
    fireEvent.change(inputKeywordField, {target: {value: inputWord}});
    expect(handleKeywordChangeSpy).toHaveBeenCalled();
  })

})