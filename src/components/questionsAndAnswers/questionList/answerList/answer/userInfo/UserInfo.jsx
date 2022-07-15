import React from 'react';
import {format} from 'date-fns';


const UserInfo = (props) => {
    let theDate = new Date( props.data.date.substr(0,4), props.data.date.substr(5,2), props.data.date.substr(8,2) )
    let user = <p className="user-info">by {props.data.answerer_name} - {format(theDate ,'MMMM d, Y')}</p>
    let yes  = <p className="helpful-event" >Yes ({props.data.helpfulness})</p>
    let report = <p className="report-event" > Report </p>

    return(
        <div className="info-tab"> {user} | Helpful? {yes} | {report}</div>)
}


export default UserInfo;