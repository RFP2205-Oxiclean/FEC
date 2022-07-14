import React from 'react';

const UserInfo = (props) => {
    return(
        <div className="info-tab">
            <p className="user-info">by {props.data.user} - {props.data.date}</p>
            | Helpful?
            <p className="helpful-event" >Yes ({props.data.question_helpfulness})</p>
            |
            <p className="report-event" > Report </p>
        </div>)
}


export default UserInfo;