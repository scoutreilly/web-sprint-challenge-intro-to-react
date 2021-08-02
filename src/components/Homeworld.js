//gathering homeworld data
import { useState, useEffect } from "react";
import axios from "axios";

function Homeworld(home) {
  const [homeData, setHomeData] = useState([]);
  // console.log(home.home);
  useEffect(() => {
    axios.get(home.home).then((response) => setHomeData(response.data));
  }, [home]);
  // console.log(homeData);
  return <p>Homeworld ~ {homeData.name}</p>;
}

export default Homeworld;
