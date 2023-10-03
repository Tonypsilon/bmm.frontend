import {IdAndLabel} from "./id-and-label";
import {Division} from "./division";

export interface EnhancedTeamDivisionLink {
    team: IdAndLabel;
    division?: Division;
    number?: number;
}
