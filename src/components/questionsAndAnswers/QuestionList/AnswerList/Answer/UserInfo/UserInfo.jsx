import React from 'react';

function userInfo (props) = {
    return(
        <div className="info-tab">
          {console.}
            <p className="user-info">by {this.props.data.user} - {this.props.data.date}</p>
            | Helpful?
            <p className="helpful-event" >Yes ({this.props.data.question_helpfulness})</p>
            |
            <p className="report-event" > Report </p>
        </div>)
}


export default UserInfo;