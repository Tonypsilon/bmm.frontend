import {MatchResult} from "./match-result";

export interface Matchday {
  date: string;
  round: number;
  matches: MatchResult[];
}
