import {Venue} from "./venue";

export interface EditTeamsDialogData {
  availableVenues: Venue[];
  numberOfTeams: number;
  selectedVenues: number[];
  teamCaptains: string[];
}
