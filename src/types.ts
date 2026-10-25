type Song = {
   uri: string,
   name: string,
   artist: string,
   album: string,
   timeListened: number,
   plays: number,
   streak: number, // streak, max amount of times it was listened to in a row
   firstListened: string // ISO timestamp from Spotify's "ts" field
}

export type { Song }

type Album = {
   name: string,
   artist: string,
   timeListened: number,
   plays: number,
   streak: number, // idk what this will be if anything, just place holder here
   firstListened: string // ISO timestamp from Spotify's "ts" field
}

export type { Album }

type Artist = {
   name: string,
   timeListened: number,
   plays: number,
   streak: number,
   firstListened: string // ISO timestamp from Spotify's "ts" field
}

export type { Artist }