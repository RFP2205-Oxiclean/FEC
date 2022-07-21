import React from 'react';

const MoreAnswers = (props) => {
  if (props.loadMoreState === props.loadMoreStateList[0]) {
    return null
  } else if (props.loadMoreState === props.loadMoreStateList[1]) {
    return <div className="load-more-a" onClick={props.clickHandler}>Collapse Answers</div>
  } else if (props.loadMoreState === props.loadMoreStateList[2]) {
    return <div className="load-more-a" onClick={props.clickHandler}>Load More Answers</div>
  }
}

export default MoreAnswers;