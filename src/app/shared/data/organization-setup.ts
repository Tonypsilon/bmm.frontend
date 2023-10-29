import {ParticipationEligibility} from "./participationEligibility";
import {Team} from "./team";
import {IdAndLabel} from "./id-and-label";

export interface OrganizationSetup {
  availablePlayers: ParticipationEligibility[];
  teams: Team[];
  availableVenues: IdAndLabel[];
  firstTeamNumber: number;
}
