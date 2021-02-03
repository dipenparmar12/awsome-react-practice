import React, {ChangeEvent, useContext, useState} from "react";
import SongType from "./SongType";
import {SongContext} from "./SongContext";
import {dispatchKeys, id} from "./SongReducer";

const SongAdd: React.FunctionComponent = () => {
  console.log("SongList rendered::",)
  const { dispatch} = useContext(SongContext)

  const [title, setTitle] = useState<string>('A');
  const [album, setAlbum] = useState<string>('B');

  const songAddFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const song: SongType = {id: id(), title, album}
    dispatch({type: dispatchKeys.SONG_ADD, song})
  }

  return (
    <>
      <form onSubmit={songAddFormSubmit}>
        <input type="text" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
        <input type="text" value={album} onChange={(e: ChangeEvent<HTMLInputElement>) => setAlbum(e.target.value)}/>
        <input type="submit" value='Add '/>
      </form>
    </>
  )
}

export default SongAdd