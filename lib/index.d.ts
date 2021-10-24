// export type {
//   Options,
//   ContinueResult,
//   Continuation,
//   Result,
//   VideoSmall,
//   Image,
//   Refinement,
//   Video,
//   Channel,
//   Playlist,
//   Mix,
//   GridMovie,
//   Movie,
//   Show,
//   Shelf,
//   Clarification,
//   HorizontalChannelList,
//   Item,
// } from 'ytsr'

import { Result, Options, continueReq as cReq } from 'ytsr';

type Features = 'Live' | '4K' | 'HD' | 'Subtitles/CC' | 'Creative Commons' | '360' | 'VR180' | '3D' | 'HDR' | 'Location' | 'Purchased'
interface OptionWithFilter extends Options {
  exactMatch?: boolean,
  filters?: {
    uploadDate?: 'Last hour' | 'Today' | 'This week' | 'This month' | 'This year'
    type?: 'Video' | 'Channel' | 'Playlist' | 'Movie'
    duration?: 'Under 4 minutes' | '4 - 20 minutes' | 'Over 20 minutes'
    features?: Features | Array<Features>
    sortBy?: 'Relevance' | 'Upload date' | 'View count' | 'Rating'
  }
}

/**
 * @param query search query
 * @param options Optional additional Options or Filters
 * @description Searches youtube for the query
 */
declare function betterytsr(query: string, options?: OptionWithFilter): Promise<Result>;

declare namespace betterytsr {
  export { cReq as continueReq };
}

export = betterytsr;
