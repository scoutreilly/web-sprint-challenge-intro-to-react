// Write your Character component here

import React from "react";
import { useState } from "react";
import Homeworld from "./Homeworld.js";
import Div from "./Div.js";

function Character(props) {
  // console.log(props);
  const propDeconstructed = props.props;
  const [show, setShow] = useState(false);
  const stats = () => setShow(true);

  //I know that this portion isn't perfect, but it's a start!
  function PlayerStats(more) {
    // console.log(more);
    const moreData = more.more;
    return (
      <>
        <p>{more.more.gender}</p>
        <p>Birth Year ~ {moreData.birth_year}</p>
        <p>Hair Color ~ {moreData.hair_color}</p>
        <p>Eye Color ~ {moreData.eye_color}</p>
        <p>Height ~ {moreData.height} cm</p>
        <p>Mass ~ {moreData.mass} kg</p>
        <Homeworld home={moreData.homeworld} />
      </>
    );
  }
  // console.log(propDeconstructed);
  // this is mindblowing, deconstructing props here allows me to map them because it actually exists as an array
  const characterList = propDeconstructed.map((human) => {
    return (
      <Div>
        <h1>
          I am <br></br>
          {human.name}
        </h1>
        <h4 onClick={stats}>Player Stats</h4>
        {show ? <PlayerStats more={human} /> : null}
      </Div>
    );
  });
  return characterList;
}

export default Character;
