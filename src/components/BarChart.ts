import { defineComponent, ref, h, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { ChartData } from "chart.js";
import { storeToRefs } from "pinia";
import { useParticipantsStore } from "../stores/participants";
import { cleanString } from "../helpers/formatText";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "ReactiveChart",
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const chartData = ref<ChartData<"bar">>({
      datasets: [],
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: true,
            drawBorder: false,
            color: "#303030",
          },
          ticks: {
            display: true,
            color: "#fff",
            font: {
              family: "Arial",
              size: 16,
              weight: "500",
            },
          },
        },
        x: {
          grid: {
            display: true,
            drawBorder: false,
            color: "#303030",
          },
          ticks: {
            display: true,
            color: "#fff",
            font: {
              family: "Arial",
              size: 16,
              weight: "500",
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: "Arial",
              size: 20,
            },
          },
        },
      },
    };

    async function fillData() {
      const { fetchParticipants } = useParticipantsStore();
      await fetchParticipants();
      const { participants } = storeToRefs(useParticipantsStore());

      const countCities = participants?.value?.reduce((acc: any, value) => {
        acc[cleanString(value?.City)] = acc[cleanString(value?.City)] + 1 || 1;
        return acc;
      }, {});

      const numCities: number[] = Object.values(countCities);

      const updatedChartData = {
        labels: Object.keys(countCities),
        datasets: [
          {
            label: "Banks in each city",
            backgroundColor: "#105f66",
            data: numCities,
          },
        ],
      };

      chartData.value = { ...updatedChartData };
    }

    onMounted(() => {
      fillData();
    });

    return () =>
      h(Bar, {
        chartData: chartData.value,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
      });
  },
});
