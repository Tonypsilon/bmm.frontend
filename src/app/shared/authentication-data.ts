import { ClubData } from "./club-data";
import { SeasonData } from "./season-data";
import { TeamData } from "./team-data";

export interface AuthenticationData {
  username: String;
  seasons: SeasonData[];
  clubs: ClubData[];
  teams: TeamData[];
}
