import React, {useContext} from "react";
import {SongDetailProp} from "./SongType";
import {dispatchKeys} from "./SongReducer";
import {SongContext} from "./SongContext";

const SongDetails: React.JSXElementConstructor<SongDetailProp> = ({song}) => {
  console.log("SongDetail rendered::",)
  const {dispatch} = useContext(SongContext);
  return (
    <li onClick={() => {
      // console.log("SongDetail song.id::", song.id)
      dispatch({type: dispatchKeys.SONG_REMOVE, id: song.id})
    }}>
      <div className='title'> {song.title} </div>
      <div className='author'> {song.album ? 'Album: ' + song.album : '#Na'} </div>
    </li>
  )
}

export default SongDetails