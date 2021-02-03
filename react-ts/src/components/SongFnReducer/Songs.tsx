import React from "react";
import SongList from "./SongList";
import SongAdd from "./SongAdd";

const Songs: React.FC = () => {
  console.log("Songs rendered::")
  return (
    <>
      <h1> My Songs </h1>
      <SongAdd/>
      <SongList/>
    </>
  )
}

export default Songs
