import React from  'react';




const AnswerModal = (props) => (
      <div className="add-answer-modal" onClick={()=>props.clickHandler()}>
            <h1>Submit your Answer</h1>
            <h3>{console.log(props, "these be the props")}</h3>
            <form id="aa-form">
            </form>
      </div>
)


export default AnswerModal