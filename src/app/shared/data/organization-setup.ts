import {Player} from "./player";
import {Team} from "./team";

export interface OrganizationSetup {
  availablePlayers: Player[];
  teams: Team[];
}
