import React from 'react';

const MoreQuestions = (props) => {
    console.log(props)
    if (props.loadMoreState === props.loadMoreStateList[0]) {
      return null
    } else if (props.loadMoreState === props.loadMoreStateList[1]) {
      return <div className="load-more" onClick={props.clickHandler}>less</div>
    } else if (props.loadMoreState === props.loadMoreStateList[2]) {
      return <div className="load-more" onClick={props.clickHandler}>more</div>
    }
}



export default MoreQuestions