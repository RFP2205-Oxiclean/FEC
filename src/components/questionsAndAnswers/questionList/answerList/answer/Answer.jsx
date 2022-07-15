import React from  'react';
import UserInfo from './userInfo/UserInfo.jsx';

const Answer = (props) => {
    console.log(props, "in ans")
    return (
        <li className="answer-content">
            <p className="a-id">A:</p>
            <p className="a-text">{props.data.body}</p>
            {/* <Photos photos={props.data.photos}/> */}
            <UserInfo data={props.data} />
        </li>)
}

export default Answer;
