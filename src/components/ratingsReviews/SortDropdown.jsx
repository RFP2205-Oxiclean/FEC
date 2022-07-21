import React, {useState} from 'react';

class SortDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSortChange = this.handleSortChange.bind(this);
    this.submitSort = this.submitSort.bind(this);
  }

  componentDidMount() {
    this.submitSort();
  }

  handleSortChange(e) {
    e.preventDefault();
    this.props.handleSortReviewsChange(e.target.value);
  }

  submitSort() {
    this.props.handleSortReviewsChange('relevance');
  }

  render() {
    return (
      <div className = 'sort-dropdown-container' data-testid = 'sort-dropdown'>
        <form >
          <span className = 'sort-dropdown-title'>{this.props.numReviews} reviews, sorted by </span>
          <select className="sort-options" data-testid = 'sort-options'onChange = {this.handleSortChange}>
            <option data-testid = "select-option-relevance" value="relevance">relevance</option>
            <option data-testid = "select-option-helpful"value="helpful">helpful</option>
            <option data-testid = "select-option-newest"value="newest">newest</option>
          </select>
        </form>
      </div>
    )
  }

}

export default SortDropdown;

