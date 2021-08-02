// Write your Character component here

import React from "react";

function Character(props) {
  console.log(props);
  const propDeconstructed = props.props;
  console.log(propDeconstructed);
  const characterList = propDeconstructed.map((human) => {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  });
  return characterList;
}

export default Character;
