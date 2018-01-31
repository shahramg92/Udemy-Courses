import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough'

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
)};

// {/* {
//   props.inputLength > 5 ?
//     <p>Text long enough</p> :
//     <p>Text too short!</p>
// // } */} you could also use a tertiary expression but it is recommended to use the above method

export default validation;
