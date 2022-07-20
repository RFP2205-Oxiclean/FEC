/** @jest-environment jsdom */

import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import RatingsSection from '../../src/components/ratingsReviews/RatingsSection.jsx';
import RatingsGraph from '../../src/components/ratingsReviews/RatingsGraph.jsx'

import '@testing-library/jest-dom'

describe('Rating Breakdown tests', ()=> {
  it('should render', () => {
    const {getByTestId} = render(<RatingsSection metadata={{
      ratings: {},
      recommended: {}
    }}/>);
    const ratingsSection = getByTestId('ratings-section')
    expect(ratingsSection).toBeTruthy();
  })

  it('should display the average rating as a number', ()=> {
    const {getByTestId} = render(<RatingsSection metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }}/>);
    const averageRating = getByTestId('average-rating')
    expect(averageRating).toBeTruthy();
    expect(averageRating.innerHTML).toContain('3')

  })

  it('should display the average rating as a star component', ()=> {
    const {getByTestId} = render(<RatingsSection metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }}/>);
    const averageRating = getByTestId('average-rating')
    expect(averageRating).toBeTruthy();
    expect(averageRating.innerHTML).toContain('3')
    const starRatingStatic = getByTestId('star-rating-static');
    expect(starRatingStatic).toBeTruthy();
  })

  it('should list the total count of ratings', () => {
    const {getByTestId} = render(<RatingsSection metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }}/>);

    const numReviews = screen.getByText('(3 ratings)')
    expect(numReviews).toBeTruthy();
    expect(screen.queryByText('(100000 ratings)')).not.toBeTruthy();
  })

  it('should display the ratings distribution as a ratings graph', () => {

    const {getByTestId} = render(<RatingsSection metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }}/>);

    const ratingsGraph = getByTestId('ratings-graph');
    expect(ratingsGraph).toBeTruthy();

  })

  it('should invoke starFilterClicked when a ratings bar is clicked', () => {
    const starFilterClickedSpy = jest.fn();
    const {getByTestId} = render(<RatingsGraph starFilterClicked = {starFilterClickedSpy} metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }} totalRatings = {3}/>);
    const fiveStarFilter = getByTestId('5-star-filter-click')
    fireEvent.click(fiveStarFilter);
    expect(starFilterClickedSpy).toHaveBeenCalled();
  })

  it('should filter reviews when there are active filters', () => {
    const {getByTestId} = render(<RatingsSection
      filterRatings = {
      {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true
      }
    }
    metadata = {{
      ratings: {
        1: '1',
        2: '0',
        3: '1',
        4: '0',
        5: '1'
      },
      recommended: {
        true: 0,
        false: 0
      }
    }}/>);

    const ratingsSection = getByTestId('ratings-section')
    expect(ratingsSection.textContent).toContain('Filters: ')
  })

  // it('should invoked starFilterClicked when a filter is clicked in RatingsGraph', () => {
  //   const handleFilterByRatingSpy = jest.fn();
  //   const {getByTestId} = render(
  //     <RatingsGraph metadata = {{
  //       ratings: {
  //         1: '1',
  //         2: '0',
  //         3: '1',
  //         4: '0',
  //         5: '1'
  //       },
  //       recommended: {
  //         true: 0,
  //         false: 0
  //       }
  //     }}/>
  //     <RatingsSection metadata = {{
  //       ratings: {
  //         1: '1',
  //         2: '0',
  //         3: '1',
  //         4: '0',
  //         5: '1'
  //       },
  //       recommended: {
  //         true: 0,
  //         false: 0
  //       }
  //     }} handleFilterByRating ={handleFilterByRatingSpy}/>);

  //   const fiveStarFilter = getByTestId('5-star-filter-click');
  //   fireEvent()

  //   expect(ratingsGraph).toBeTruthy();
  // })
})