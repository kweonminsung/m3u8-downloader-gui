export interface VideoData {
  segments: {
    duration: number;
    timeline: number;
    uri: string;
  }[];
  targetDuration: number;
}
