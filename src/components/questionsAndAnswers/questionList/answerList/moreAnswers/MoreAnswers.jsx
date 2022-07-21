import React from 'react';

const MoreAnswers = (props) => {
  if (props.loadMoreState === props.loadMoreStateList[0]) {
    return null
  } else if (props.loadMoreState === props.loadMoreStateList[1]) {
<<<<<<< HEAD
    return <div className="load-more-a" onClick={props.clickHandler}>Collapse Answers</div>
  } else if (props.loadMoreState === props.loadMoreStateList[2]) {
    return <div className="load-more-a" onClick={props.clickHandler}>Load More Answers</div>
=======
    return <div className="small-interactive-buttons" onClick={props.clickHandler}>COLLAPSE ANSWERS</div>
  } else if (props.loadMoreState === props.loadMoreStateList[2]) {
    return <div className="small-interactive-buttons" onClick={props.clickHandler}>Load more answers</div>
>>>>>>> 7ddfcd6bdc00ad81ce42d6f7fff53503a5fda42e
  }
}

export default MoreAnswers;