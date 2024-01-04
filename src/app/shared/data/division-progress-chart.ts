import {TeamProgressChart} from "./team-progress-chart";

export interface DivisionProgressChart {
  numberOfRounds: number;
  teamProgressCharts: TeamProgressChart[];
}
