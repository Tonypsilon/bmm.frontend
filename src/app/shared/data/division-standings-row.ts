import {IdAndLabel} from "./id-and-label";

export interface DivisionStandingsRow {
  team: IdAndLabel;
  results: IdAndLabel[];
  teamPoints: string;
  boardPoints: string;
}
