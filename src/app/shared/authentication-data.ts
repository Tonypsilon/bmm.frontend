import { ClubData } from "./club-data";
import { SeasonData } from "./season-data";
import { TeamData } from "./team-data";

export interface AuthenticationData {
  username: string;
  isAdmin: boolean;
  seasons: SeasonData[];
  clubs: ClubData[];
  teams: TeamData[];
}
