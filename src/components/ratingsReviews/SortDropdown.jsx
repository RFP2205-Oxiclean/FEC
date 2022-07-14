import React, {useState} from 'react';

const SortDropdown = ({numReviews, sortReviews}) => {

  const [sortOption, setSortOption] = useState(null)
  const handleSortChange = (e) => {
    e.preventDefault();
    sortReviews(sortOption);

  }

  return (
    <form> {numReviews} reviews, sorted by
      <select className="sort-options" onChange = {handleSortChange}>
        <option value="relevance">relevance</option>
        <option onSelect = {() => { setSortOption('helpful')}}value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </form>
  )
}

export default SortDropdown;