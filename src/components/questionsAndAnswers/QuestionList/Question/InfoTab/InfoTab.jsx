import React from 'react';


const InfoTab = (props) => {
    let yes = <p className="helpful-event" >Yes ({props.question.question_helpfulness})</p>;
    let add = <p className="add-answer-vent" >Add Answer</p>;
    return <div className="info-tab"> Helpful? {yes} | {add} </div>
}

export default InfoTab;