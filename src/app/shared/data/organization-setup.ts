import {ParticipationEligibility} from "./participationEligibility";
import {Team} from "./team";

export interface OrganizationSetup {
  availablePlayers: ParticipationEligibility[];
  teams: Team[];
}
