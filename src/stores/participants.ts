import type { IParticipants } from "./../types/participants.Types";
import { ParticipantsService } from "./../services/ParticipantsServices";
import { defineStore } from "pinia";
import type { AxiosError } from "axios";

export interface IParticipantsState {
  participants: IParticipants[];
  loading: boolean;
  error: AxiosError | null;
}

export const useParticipantsStore = defineStore({
  id: "participants",
  state: () =>
    ({
      participants: [],
      loading: false,
      error: null,
    } as IParticipantsState),
  actions: {
    async fetchParticipants() {
      this.participants = [];
      this.loading = true;
      try {
        this.participants = await ParticipantsService.selectParticipants().then(
          (response) => response
        );
      } catch (error: AxiosError | any) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
