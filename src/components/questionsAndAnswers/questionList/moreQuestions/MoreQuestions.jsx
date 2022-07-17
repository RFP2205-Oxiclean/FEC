import React from 'react';

const MoreQuestions = (props) => {
    console.log(props)
    if (props.loadMoreState === props.loadMoreStateList[0]) {
      return null
    } else if (props.loadMoreState === props.loadMoreStateList[1]) {
      return <div className="load-more interactive-buttons" onClick={props.clickHandler}>COLLAPSE QUESTIONS</div>
    } else if (props.loadMoreState === props.loadMoreStateList[2]) {
      return <div className="load-more interactive-buttons" onClick={props.clickHandler}>MORE ANSWERED QUESTIONS</div>
    }
}



export default MoreQuestions