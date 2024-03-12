import {IdAndLabel} from "./id-and-label";
import {ParticipantResult} from "./participant-result";

export interface ParticipantResults {
  name: string;
  rating: string;
  team: IdAndLabel;
  results: ParticipantResult[];
  performance: string;
  ratingChange: string;
  seasonId: number;
}
