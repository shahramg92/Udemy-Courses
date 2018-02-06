import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hi, my name is {props.userName}</p>
      <p>I love react</p>
    </div>
  );
};

export default userOutput;
