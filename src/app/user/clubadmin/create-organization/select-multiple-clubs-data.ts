import {IdAndLabel} from "../../../shared/data/id-and-label";

export interface SelectMultipleClubsData {
  name?: string;
  availableClubs: IdAndLabel[];
  selectedClubs?: number[];
}
