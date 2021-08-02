// Write your Character component here

import React from "react";
import Homeworld from "./Homeworld.js";
import Div from "./Div.js";

function Character(props) {
  // console.log(props);
  const propDeconstructed = props.props;
  // console.log(propDeconstructed);
  // this is mindblowing, deconstructing props here allows me to map them because it actually exists as an array
  const characterList = propDeconstructed.map((human) => {
    return (
      <Div>
        <h1>
          I am <br></br>
          {human.name}
        </h1>
        <h4>Player Stats</h4>
        <p>{human.gender}</p>
        <p>Birth Year ~ {human.birth_year}</p>
        <p>Hair Color ~ {human.hair_color}</p>
        <p>Eye Color ~ {human.eye_color}</p>
        <p>Height ~ {human.height} cm</p>
        <p>Mass ~ {human.mass} kg</p>
        <Homeworld home={human.homeworld} />
      </Div>
    );
  });
  return characterList;
}

export default Character;
