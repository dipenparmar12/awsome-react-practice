export default interface SongType {
  id: any,
  title: string,
  album?: string
}

export interface SongDetailProp {
  song: SongType,
}
