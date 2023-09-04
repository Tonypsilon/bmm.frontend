import {ParticipationEligibility} from "./participationEligibility";

export interface Team {
  id?: number;
  organizationId: number;
  number: number;
  venueId?: number;
  name?: string;
  participants: ParticipationEligibility[]
}
