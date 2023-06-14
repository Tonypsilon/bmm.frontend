import { Club } from "./club";
import { Season } from "./season";
import { Team } from "./team";

export interface Authentication {
  username: string;
  isAdmin: boolean;
  seasons: Season[];
  clubs: Club[];
  teams: Team[];
}
