import React from 'react';

const MoreQuestions = (props) => {
    if (props.loadMoreState === props.loadMoreStateList[0]) {
        return null
    } else if (props.loadMoreState === props.loadMoreStateList[1]) {
        return <div className="interactive-buttons load-more" onClick={props.clickHandler}>COLLAPSE QUESTIONS</div>
    } else if (props.loadMoreState === props.loadMoreStateList[2]) {
       return <div className="interactive-buttons load-more" onClick={props.clickHandler}>MORE ANSWERED QUESTIONS</div>
    }
}



export default MoreQuestions