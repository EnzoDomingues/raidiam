import type { IParticipants } from "types/participants.Types";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository";

export interface IParticipantsService {
  selectParticipants: () => Promise<IParticipants[]>;
}

export const ParticipantsService: IParticipantsService = {
  selectParticipants: () => {
    return ParticipantsRepository.selectParticipants();
  },
};
