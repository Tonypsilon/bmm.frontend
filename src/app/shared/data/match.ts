import {Participant} from "./participant";
import {IdAndLabel} from "./id-and-label";
import {Game} from "./game";

export interface Match {
    availableHomePlayers: Participant[];
    availableAwayPlayers: Participant[];
    selectedHomePlayers: Participant[];
    selectedAwayPlayers: Participant[];
    numberOfBoards: number;
    availableReferees: IdAndLabel[];
    selectedReferee: IdAndLabel;
    games: Game[];
}
