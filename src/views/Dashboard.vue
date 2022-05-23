<script>
import ContinuarViendo from '../components/ContinuarViendo.vue'
import { getSeries } from "../services/series.js"
import { useToast } from "vue-toastification";
import { seriesStore } from "../stores/series.js";

export default {

    setup() {
        const toast = useToast();
        const store = seriesStore();
        // Make it available inside methods
        return { toast, store }
    },

    data() {
        return {
            series: {},
            is_ready: false,
            error: false
        }
    },

    methods: {
        async seriesService() {

            let seriesResponse = {}
            let response = await getSeries()

            if (response.error) {
                this.toast.error("Error al Cargar las series populares")

                seriesResponse = {
                    series: response,
                    is_ready: false,
                    error: true
                }

                this.store.setSeries(seriesResponse)
            }

            else {
                console.log("Componente Dash")
                this.series = response
                this.is_ready = true

                seriesResponse = {
                    series: response,
                    is_ready: true,
                    error: false
                }

                this.store.setSeries(seriesResponse)
            }
        },

        getSeriesDetail(id_serie){
            this.$router.push("/series/" + id_serie)
        },
        
        getCategory(id_category){
            this.$router.push("/search/" + id_category)
        }
    },

    computed: {
        popularSeries() {
            return this.series.filter(serie => serie.is_popular == 1)
        }
    },

    mounted() {
        this.seriesService()
    }
}

</script>

<template>
    <div class="dashboard">
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Series Populares</span>

        <div class="mt-3 d-flex justify-content-between" v-if="is_ready">
            <img v-for="serie in popularSeries" class="rounded w-25 h-25 click" :src="serie.imagen" :alt="serie.nombre_serie"
                :key="serie.id_serie" @click="getSeriesDetail(serie.id_serie)">
        </div>

        <div class="spinner-border text-primary" role="status" v-else>
            <span class="visually-hidden">Loading...</span>
        </div>


        <div class="mt-5">
            <ContinuarViendo />
        </div>

        <i class="bi bi-tags-fill mx-2 text-success align-middle"></i>
        <span class="h4 align-middle">Categorias</span>

        <div class="mt-3 d-flex justify-content-between">
            <img class="rounded w-25 h-25 click" src="../assets/G1.jpg" alt="Accion" @click="getCategory(1)">
            <img class="rounded w-25 h-25 click" src="../assets/G2.jpg" alt="Comedia" @click="getCategory(2)">
            <img class="rounded w-25 h-25 click" src="../assets/G3.jpg" alt="Anime" @click="getCategory(3)">
            <img class="rounded w-25 h-25 click" src="../assets/G4.jpg" alt="Terror" @click="getCategory(4)">
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