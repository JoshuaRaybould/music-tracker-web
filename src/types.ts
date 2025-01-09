type Song = {
   uri: string,
   name: string,
   artist: string,
   album: string,
   timeListened: number,
   plays: number,
   streak: number, // streak, max amount of times it was listened to in a row
   firstListened: EpochTimeStamp
}

export type { Song }

type Album = {
   name: string,
   artist: string,
   timeListened: number,
   plays: number,
   streak: number, // idk what this will be if anything, just place holder here
   firstListened: EpochTimeStamp
}

export type { Album }

type Artist = {
   name: string,
   timeListened: number,
   plays: number,
   streak: number,
   firstListened: EpochTimeStamp
}

export type { Artist }