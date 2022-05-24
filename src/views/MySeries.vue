<script>
import ContinuarViendo from '../components/ContinuarViendo.vue';
import { userStore } from "../stores/user";
import axios from "axios";

export default {

    setup() {
        const store = userStore();
        // Make it available inside methods
        return { store }
    },

    data() {
        return {
            is_ready: false,
            series: {}
        }
    },

    methods: {
        getMySeries() {
            axios.get("http://localhost:8000/series/userSeries/" + this.store.user_id)
                .then(response => {
                    console.log(response.data)
                    this.series = response.data
                    this.is_ready = true
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getSeriesDetail(id_serie){
            this.$router.push("/series/" + id_serie)
        }
    },

    mounted() {
        this.getMySeries()
    }

}


</script>


<template>
    <div v-if="is_ready" class="dashboard">
        <ContinuarViendo />
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Mis Series</span>

        <div class="d-flex flex-row justify-content-between align-content-around flex-wrap">
            <img v-for="serie in series" class="rounded w-25 h-25 mt-4 click" :src="serie.imagen" :alt="serie.nombre_serie"
                :key="serie.id_serie" @click="getSeriesDetail(serie.id_serie)">
        </div>
    </div>
    <div class="spinner-border text-primary" role="status" v-else>
        <span class="visually-hidden">Loading...</span>
    </div>


</template>


<style scoped>
.dashboard {
    margin-top: 3rem;
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