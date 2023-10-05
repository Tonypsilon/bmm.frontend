import {Participant} from "./participant";
import {Result} from "./result";

export interface Game {
    homeParticipant: Participant;
    awayParticipant: Participant;
    result: Result;
}
