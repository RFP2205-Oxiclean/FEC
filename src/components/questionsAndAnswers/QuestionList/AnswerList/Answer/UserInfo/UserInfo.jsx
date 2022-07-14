import React from 'react';



const UserInfo = (props) => {
  console.log(props)
    let user = <p className="user-info">by {props.data.user} - {props.data.date}</p>
    let yes  = <p className="helpful-event" >Yes ({props.data.helpfulness})</p>
    let report = <p className="report-event" > Report </p>

    return(
        <div className="info-tab"> {user} | Helpful? {yes} | {report}</div>)
}


export default UserInfo;