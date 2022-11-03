<script setup>
import { storeToRefs } from "pinia";
import { useParticipantsStore } from "../stores/participants";
import { ref } from "vue";
const { participants } = storeToRefs(useParticipantsStore());
let input = ref("");

const filteredList = () => {
  return participants?.value?.filter((participant) =>
    participant.OrganisationName.toLowerCase().includes(
      input.value.toLowerCase()
    )
  );
};
</script>

<template>
  <div class="filter-partipants">
    <input type="text" v-model="input" placeholder="Search" />
    <h3>Organisations</h3>
    <div class="filter-partipants-items">
      <div
        class="filter-partipants-item"
        v-for="participant in filteredList()"
        :key="participant.OrganisationId"
      >
        <p>RegistrationId: {{ participant.RegistrationId }}</p>
        <p>Name: {{ participant.OrganisationName }}</p>
        <p>Status: {{ participant.Status }}</p>
        <p>Country: {{ participant.Country }}</p>
        <p>City: {{ participant.City }}</p>
      </div>
      <div
        class="filter-partipants-item-error"
        v-if="input && !filteredList().length"
      >
        <p>No results found!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-partipants {
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  margin: auto;
  max-width: 1440px;
}
.filter-partipants input {
  width: 25%;
  height: 55px;
  background: transparent;
  border: 2px solid var(--vt-c-white);
  border-radius: 100px;
  padding-left: 20px;
  font-size: 20px;
  color: var(--vt-c-white);
}

.filter-partipants input::placeholder {
  color: var(--vt-c-white-soft);
}

.filter-partipants h3 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--vt-c-white);
}
.filter-partipants-items {
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-bottom: 20px;
}
.filter-partipants-item {
  margin-right: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  width: 262px;
  height: 180px;
  border: 1px solid var(--vt-c-white);
  border-radius: 8px;
}

.filter-partipants-item p {
  font-size: 15px;
  color: var(--vt-c-white);
}
.filter-partipants-item-error p {
  font-size: 20px;
  color: var(--vt-c-white);
}
</style>
