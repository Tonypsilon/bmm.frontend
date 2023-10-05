import { IdAndLabel } from "./id-and-label";

export interface Authentication {
  username: string;
  isAdmin: boolean;
  seasons: IdAndLabel[];
  clubs: IdAndLabel[];
  organizations: IdAndLabel[];
  teams: IdAndLabel[];
  matches: IdAndLabel[];
}
