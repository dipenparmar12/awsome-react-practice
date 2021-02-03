import React, {useContext} from "react";
import SongDetails from "./SongDetail";
import {SongContext} from "./SongContext";

const SongList: React.FunctionComponent = () => {
  console.log("SongList rendered::",)
  const {songs} = useContext(SongContext)
  return (
    <>
      <div className='book-list'>
        {
          songs ?
            songs.map((song) => <SongDetails key={song.id} song={song}/>) : '#ERR'
        }
      </div>
    </>
  )
}

export default SongList

