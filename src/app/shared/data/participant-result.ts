import {IdAndLabel} from "./id-and-label";

export interface ParticipantResult {
  round: number;
  color: string;
  opponentTeam: IdAndLabel;
  boardNumber: number;
  opponent: IdAndLabel;
  result: string;
}
