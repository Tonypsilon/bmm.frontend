import {Player} from "./player";

export interface Team {
  id?: number;
  organizationId: number;
  number: number;
  venueId?: number;
  name?: string;
  players?: Player[]
}
