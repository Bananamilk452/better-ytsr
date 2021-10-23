export type {
  Options,
  ContinueResult,
  Continuation,
  Result,
  VideoSmall,
  Image,
  Refinement,
  Video,
  Channel,
  Playlist,
  Mix,
  GridMovie,
  Movie,
  Show,
  Shelf,
  Clarification,
  HorizontalChannelList,
  Item,
} from 'ytsr'

export { continueReq, version } from 'ytsr';

import { Result } from 'ytsr';

interface OptionWithFilter extends Options {
  filters?: {
    uploadDate?: 'Last hour' | 'Today' | 'This week' | 'This month' | 'This year'
    type?: 'Video' | 'Channel' | 'Playlist' | 'Movie'
    duration?: 'Under 4 minutes' | '4 - 20 minutes' | 'Over 20 minutes'
    features?: 'Live' | '4K' | 'HD' | 'Subtitles/CC' | 'Creative Commons' | '360' | 'VR180' | '3D' | 'HDR' | 'Location' | 'Purchased'
    sortBy?: 'Relevance' | 'Upload date' | 'View count' | 'Rating'
  }
}

/**
 * @param query search query
 * @param options Optional additional Options or Filters
 * @description Searches youtube for the query
 */
  function betterytsr(query: string, options?: OptionWithFilter): Promise<Result>;
  
  export = betterytsr;
