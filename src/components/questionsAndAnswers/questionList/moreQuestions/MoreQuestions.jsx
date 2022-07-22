import React from 'react';

const MoreQuestions = (props) => {
    if (props.loadMoreState === props.loadMoreStateList[0]) {
        return null
    } else if (props.loadMoreState === props.loadMoreStateList[1]) {
        return <div className="interactive-buttons load-more" data-testid="more-questions-button" onClick={props.clickHandler}>COLLAPSE QUESTIONS</div>
    } else if (props.loadMoreState === props.loadMoreStateList[2]) {
       return <div className="interactive-buttons load-more" data-testid="more-questions-button" onClick={props.clickHandler}>MORE ANSWERED QUESTIONS</div>
    }
}



export default MoreQuestions