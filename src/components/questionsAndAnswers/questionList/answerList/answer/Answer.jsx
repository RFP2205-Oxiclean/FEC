import React from  'react';
import UserInfo from './userInfo/UserInfo.jsx';
import PhotoList from './photoList/PhotoList.jsx';



const Answer = (props) => {

  return (
    <li className="answer-content">
      <p className="a-id">A:</p>
      <p className="a-text">{props.data.body}</p>
      <PhotoList photos={props.data.photos}/>
      <UserInfo data={props.data} />
    </li>)

}

export default Answer;
