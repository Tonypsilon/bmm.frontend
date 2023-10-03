import {Division} from "./division";
import {IdAndLabel} from "./id-and-label";
import {TeamDivisionLink} from "./team-division-link";

export interface DivisionSetupFoundation {
    availableDivisions: Division[];
    availableTeams: IdAndLabel[];
    currentLinks?: TeamDivisionLink[];
}
