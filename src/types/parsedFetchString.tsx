import { AxiosResponseHeaders, Method } from 'axios';

export interface ParsedFetchString {
  url: string;
  headers: AxiosResponseHeaders;
  method: Method;
}
