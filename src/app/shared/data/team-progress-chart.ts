import {IdAndLabel} from "./id-and-label";
import {ParticipantProgressChart} from "./participant-progress-chart";

export interface TeamProgressChart {
  team: IdAndLabel;
  participantProgressCharts: ParticipantProgressChart[];
}
