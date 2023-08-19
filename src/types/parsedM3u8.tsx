export interface ParsedM3u8 {
  allowCache: boolean;
  discontinuitySequence: number;
  discontinuityStarts: number[];
  endList: boolean;
  independentSegments: boolean;
  mediaSequence: number;
  playlistType: string;
  playlistTypeString: string;
  segments: {
    duration: number;
    key: {
      iv: Uint32Array;
      method: string;
      uri: string;
    };
    timeline: number;
    uri: string;
  }[];
  targetDuration: number;
  version: number;
}
