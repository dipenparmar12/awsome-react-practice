import React, {PropsWithChildren, useEffect, useReducer} from "react";
import SongReducer, {SongsSeed, SongState} from "./SongReducer";
import SongType from "./SongType";

interface SongContextType {
  songs: SongType[],
  dispatch: any
}

export const SongContext = React.createContext<SongContextType>(undefined!)

const SongContextProvider: React.FunctionComponent = ({children}: PropsWithChildren<any>) => {

  const localSongs = localStorage.getItem('songs')
  const storedSongs: SongType[] = Array.from(JSON.parse(localSongs!))

  const [{songs}, dispatch] = useReducer(SongReducer, SongsSeed, (): SongState => {
    return {
      songs: storedSongs
    }
  })

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs))
  }, [songs])

  return (
    <>
      <SongContext.Provider value={{songs: songs, dispatch}}>
        {children}
      </SongContext.Provider>
    </>
  )
}

export default SongContextProvider