import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
};

//
// You can also put this in the div and it will work the same:
// if props.inputLength is greater than five, then write text long enough. otherwise, print out text too short
// {
//   props.inputLength > 5 ?
//     <p>Text long enough</p> :
//     <p>Text too short!</p>
// }


export default validation;
