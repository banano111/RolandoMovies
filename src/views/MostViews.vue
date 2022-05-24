<script>
import Carrousel from '../components/Carrousel.vue';
import { seriesStore } from "../stores/series.js";

export default {
    setup() {
        const store = seriesStore();
        // Make it available inside methods
        return { store }
    },

    data() {
        return {
            series: {},
            is_ready: false,
            error: false
        }
    },

    methods: {
        getSeriesDetail(id_serie) {
            this.$router.push("/series/" + id_serie)
        },
    },

    mounted() {
        this.series = this.store.getSeries()
        this.is_ready = true
    },

    computed: {
        popularSeries() {
            return this.series.filter(serie => serie.is_popular == 1)
        }
    },
}
</script>

<template>
    <div class="dashboard">

        <div class="p-2">
            <i class="bi bi-calendar-week mx-2 text-primary align-middle"></i>
            <span class="h4 align-middle">Lo Mejor de la Semana</span>
        </div>
        <div class="mt-3 mb-5 mx-auto w-75">
            <Carrousel />
        </div>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill me-2 text-warning align-middle"></i>
        <span class="h4 align-middle">5 Estrellass</span>

        <div class="mt-3 d-flex justify-content-between" v-if="is_ready">
            <img v-for="serie in popularSeries" class="rounded w-25 h-25 click" v-bind:src="serie.imagen" alt=""
                :key="serie.id_serie" @click="getSeriesDetail(serie.id_serie)">
        </div>

        <div class="spinner-border text-primary" role="status" v-else>
            <span class="visually-hidden">Loading...</span>
        </div>

    </div>

</template>

<style scoped>
.dashboard {
    margin-top: 2.5rem;
    margin-left: 3rem;
    max-width: 70%;
}

.w-25 {
    width: 23% !important;
}

.click{
    cursor: pointer;
}
</style>