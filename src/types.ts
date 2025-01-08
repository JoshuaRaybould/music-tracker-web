type Song = {
   uri: string,
   name: string,
   artist: string,
   album: string,
   timeListened: number
}

export type { Song }

type Album = {
   name: string,
   artist: string,
   timeListened: number
}

export type { Album }

type Artist = {
   name: string,
   timeListened: number
}

export type { Artist }