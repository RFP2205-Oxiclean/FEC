import React from 'react';

const MoreAnswers = (props) => {
  console.log(props, 'in ma')
  if (props.loadMoreState === props.loadMoreStateList[0]) {
    return null
  } else if (props.loadMoreState === props.loadMoreStateList[1]) {
    return <div className="load-more-a" onClick={props.clickHandler}><p>Collapse answers</p></div>
  } else if (props.loadMoreState === props.loadMoreStateList[2]) {
    return <div className="load-more-a" onClick={props.clickHandler}><p>See more answers</p></div>
  }
}

export default MoreAnswers;