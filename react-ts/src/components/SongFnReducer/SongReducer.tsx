import React from "react";
import SongType from "./SongType";

/*
//------------
// Reducer Steps:
# ModelType <T>
# ModelSeed | ModelInitState <T>
# ModelDispatchKeys <enum>
# IModelKeys <interface>
# ModelAction <type> // strictly type, one of IModelEachKey
# ModelState <interface>
# ReducerClass <class|function> /// switch, conditional based execution
# !HelperFun....
*/

/// Helper method for random id.
export const id = (len = 8): string => '_' + Math.random().toString(36).substr(2, len);

// interface SongType {
//   id: any,
//   title: string,
//   album?: string,
// }

export enum dispatchKeys {
  SONG_ADD,
  SONG_REMOVE,
}

export interface ISongAdd {
  type: dispatchKeys.SONG_ADD,
  song: SongType,
}

export interface ISongRemove {
  type: dispatchKeys.SONG_REMOVE,
  id: string | number,
}

export type SongAction = ISongAdd | ISongRemove

export const SongsSeed = {
  songs: [
    {id: id(), title: 'first song is here', album: 'album name goes here.'},
    {id: id(), title: 'One mic [Remix] all i need 1 Mic.', album: 'Nac, Trevx'},
    {id: id(), title: 'Everything is awesome', album: 'Dipenparmar12'},
  ]
}

export interface SongState {
  songs: SongType[]
}

const SongReducer: React.Reducer<any, any> = (prevState: SongState = SongsSeed, action: SongAction) => {
  // console.log("SongReducer prevState::", prevState)
  // console.log("SongReducer action::", action)

  /// We dont have handle condition if prevState have default value.
  // if (typeof prevState === 'undefined')
  //   return SongsSeed

  switch (action.type) {
    case dispatchKeys.SONG_ADD:
      //  We don't mutate the prevState. We create a copy with Object.assign().
      return {songs: [...prevState.songs, action.song]} // sort hand of Object.assign().
    // return Object.assign({}, {songs: [...prevState.songs, action.song]})
    case dispatchKeys.SONG_REMOVE:
      console.log("SongReducer action.id::", action.id)
      return {songs: [...prevState.songs.filter(song => song.id !== action.id)]}
    default:
      return prevState
  }

}


export default SongReducer