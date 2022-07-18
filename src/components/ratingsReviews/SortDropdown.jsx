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
    console.log('handle sort change invoked', e.target.value)
    this.props.handleSortReviewsChange(e.target.value);
  }

  submitSort() {
    this.props.handleSortReviewsChange('relevance');
  }

  render() {
    return (
      <div className = 'sort-dropdown-container'>
        <form >
          <span className = 'sort-dropdown-title'>{this.props.numReviews} reviews, sorted by </span>
          <select className="sort-options" onChange = {this.handleSortChange}>
            <option value="relevance">relevance</option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
          </select>
        </form>
      </div>
    )
  }

}

export default SortDropdown;

