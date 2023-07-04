import { IdAndLabel } from "./id-and-label";

export interface Authentication {
  username: string;
  isAdmin: boolean;
  seasons: IdAndLabel[];
  clubs: IdAndLabel[];
  teams: IdAndLabel[];
}
