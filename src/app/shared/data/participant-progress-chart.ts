import {Participant} from "./participant";
import {IdAndLabel} from "./id-and-label";

export interface ParticipantProgressChart {
  participant: Participant;
  results: IdAndLabel[];
}
