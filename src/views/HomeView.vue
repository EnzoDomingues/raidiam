<script setup>
import HeaderView from "../components/HeaderView.vue";
import SearchPartipants from "../components/SearchPartipants.vue";
import { storeToRefs } from "pinia";
import { useParticipantsStore } from "../stores/participants";

const { loading } = storeToRefs(useParticipantsStore());
const { fetchParticipants } = useParticipantsStore();
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

<script>
import BarChart from "../components/BarChart";

export default {
  name: "BarChart",
  components: {
    BarChart,
  },
};
</script>

<style scoped>
.participants p {
  color: white;
}
.chart {
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1440px;
  margin: auto;
}
</style>
