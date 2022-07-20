/** @jest-environment jsdom */
import {shallow, configure} from 'enzyme';

import {screen, act, render, fireEvent, cleanup} from "@testing-library/react";
import React from 'react';
import ReviewListEntry from '../../src/components/ratingsReviews/ReviewListEntry.jsx';

import '@testing-library/jest-dom'

describe('Review Tile Component', () => {

  it('should render a review tile', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
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
      }
    }/>)
    const reviewTile = getByTestId("review-tile");
    expect(reviewTile).toBeTruthy();
  })

  it('should display a Star Rating on a review', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
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
      }
    }/>)
    const starRating = getByTestId('star-rating-static')
    expect(starRating).toBeTruthy();
  })

  it('should display a date on a review', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
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
      }
    }/>)

    const reviewTile = getByTestId('review-tile')
    expect(reviewTile.textContent).toContain('July 18, 2022')

  })

  it('should display the review summary', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
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
      }
    }/>)
    const reviewTile = getByTestId('review-tile')
    expect(reviewTile.textContent).toContain('This review is a test using React testing library')
  })

  it('should display the review body', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'this is a review body',
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
    }/>)
    const reviewTile = getByTestId('review-tile')
    expect(reviewTile.textContent).toContain('this is a review body')
  })

  it('should only show the first 250 characters of the review body', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
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
    }/>)
    const reviewTile = getByTestId('review-tile')
    expect(reviewTile.textContent).toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, ege')
    expect(reviewTile.textContent).not.toContain('t tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.')
  })

  it('should have a show more button when the review is >250 characters', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
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
    }/>)
    const reviewTile = getByTestId('review-tile')
    expect(reviewTile.textContent).toContain('Show More')
  })

  it('should show the remaining review body when Show More is clicked', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
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
    }/>)
    const reviewTile = getByTestId('review-tile')
    fireEvent.click(screen.getByText('Show More'));
    expect(reviewTile.textContent).toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.')
  })

  it('should display images as thumbnails', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const thumbnailImage = getByTestId('review-thumbnail-image');
    expect(thumbnailImage).toHaveAttribute('src', 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ')
  })

  it('should open a full image modal when a thumbnail photo is clicked', () => {
    const {queryByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const reviewTile = queryByTestId('review-tile');
    fireEvent.click(queryByTestId('review-thumbnail-image'));
    const imageModal = queryByTestId('full-image-modal')
    expect(imageModal).toBeTruthy();
  })

  it('should display that the reviewer recommends the product', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: true,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const reviewTile = getByTestId('review-tile');
    expect(reviewTile.textContent).toContain('I recommend this product')
  })

  it('should not display that the reviewer recommends the product', () => {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: false,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const reviewTile = getByTestId('review-tile');
    expect(reviewTile.textContent).not.toContain('I recommend this product')
  })

  it('should display the username for the reviewer', ()=> {
    const {getByTestId} = render(<ReviewListEntry review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: false,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test Username',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const reviewTile = getByTestId('review-tile');
    expect(reviewTile.textContent).toContain('React Test Username')
  })

  it('should have a link to allow user to mark a review as helpful', () => {
    const markReviewHelpfulSpy = jest.fn();

    const {getByTestId} = render(<ReviewListEntry handleMarkReviewHelpful={markReviewHelpfulSpy} review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: false,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>)
    const helpful = getByTestId('review-helpful-link')
    expect(helpful).toBeTruthy();

    fireEvent.click(helpful);
    expect(markReviewHelpfulSpy).toHaveBeenCalled();

  })

  it('should have a link to allow user to mark a review as helpful', () => {
    const markReviewHelpfulSpy = jest.fn();

    const {getByTestId} = render(<ReviewListEntry handleMarkReviewHelpful={markReviewHelpfulSpy} review = {
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sollicitudin risus, sit amet commodo nulla. Aliquam pellentesque massa tellus, in ultrices ante facilisis sed. Sed ut feugiat est, vel interdum augue. In facilisis tristique lectus, eget tincidunt lacus faucibus at. Nullam sed elementum purus. Proin pellentesque vestibulum placerat. Nulla.',
        date: '2022-07-19T00:00:00.000Z',
        helpfulness: 1,
        photos: [{url: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}],
        rating: 1,
        recommend: false,
        response: null,
        review_id: 1275683,
        reviewer_name: 'React Test',
        summary: 'This review is a test using React testing library'
      }
    }/>);

    const localStorage = '[]';

    const helpful = getByTestId('review-helpful-link')
    expect(helpful).toBeTruthy();

    fireEvent.click(helpful);
    expect(markReviewHelpfulSpy).toHaveBeenCalled();
  })

  // //t("should test Collapse has an onClick event", () => {
  // const closePanelSpy = jest.fn();

  // const { getByTestId } = render(<CollapseButton setIsHiding={closePanelSpy}></CollapseButton>);

  // fireEvent.click(getByTestId("collapseButton"));

  // expect(closePanelSpy).toHaveBeenCalled();
})