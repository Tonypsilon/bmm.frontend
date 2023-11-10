import {Game} from "./game";

export interface MatchResult {
  date?: string;
  venueLabel: string;
  refereeLabel?: string;
  homeTeamLabel: string;
  awayTeamLabel: string;
  state: string;
  games: Game[];
  homeTeamResultLabel: string;
  awayTeamResultLabel: string;
}
