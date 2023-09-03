export interface ParticipationEligibility {
  id: number;
  seasonId: number;
  clubId: number;
  forename: string;
  surname: string;
  pkz: number;
  dwz?: number;
}
