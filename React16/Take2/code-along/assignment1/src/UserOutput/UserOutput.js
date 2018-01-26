import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>Hi, my name is {props.userName}</p>
      <p onClick={props.clicked} >I love react</p>
    </div>
  );
};

export default userOutput;
