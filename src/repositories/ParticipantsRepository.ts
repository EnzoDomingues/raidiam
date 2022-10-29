import axios from "axios";
import { HttpError } from "../system/errors/HttpError";
import type { IParticipants } from "types/participants.Types";

export interface IParticipantsRepository {
  selectParticipants: () => Promise<IParticipants[]>;
}

export const ParticipantsRepository: IParticipantsRepository = {
  selectParticipants: async () => {
    // API URL
    const url =
      "https://data.sandbox.directory.openbankingbrasil.org.br/participants";

    return await axios
      .get(url)
      .then((response) => {
        const { data } = response;

        return data;
      })
      .catch((reason: any) => {
        if (axios.isAxiosError(reason)) {
          throw HttpError.fromAxiosError(reason);
        } else {
          throw reason;
        }
      });
  },
};
