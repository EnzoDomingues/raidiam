<script setup lang="ts">
import BarChart from "../components/BarChart.vue";
import HeaderView from "../components/HeaderView.vue";
import SearchPartipants from "../components/SearchPartipants.vue";
import { storeToRefs } from "pinia";
import { useParticipantsStore } from "../stores/participants";

const { participants, loading, error } = storeToRefs(useParticipantsStore());
const { fetchParticipants } = useParticipantsStore();

console.log("participants", participants.value);

fetchParticipants();
</script>

<template>
  <main>
    <HeaderView />
    <p v-if="loading">Loading participants...</p>
    <SearchPartipants />
    <div class="chart">
      <BarChart />
    </div>
  </main>
</template>

<style scoped>
.participants p {
  color: white;
}
.chart {
  padding-top: 50px;
  width: 40%;
  margin: auto;
}
</style>
