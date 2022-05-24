<script>

import axios from "axios";


export default {

    data() {
        return {
            is_ready: false,
            watching: {}
        }
    },

    methods: {
        getWatchingSeries() {
            axios.get("http://localhost:8000/series/watching/" + localStorage.user_id)
                .then(response => {
                    console.log(response.data)
                    this.watching = response.data
                    this.is_ready = true
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getSeriesDetail(id_serie){
            this.$router.push("/series/" + id_serie)
        },

    
    },

    mounted() {
        this.getWatchingSeries()
    }

}

</script>

<template>
    <i class="bi bi-pin-fill mx-2 text-danger align-middle"></i>
    <span class="h4 align-middle">Continuar Viendo</span>
    <div class="row mt-3">
        <div v-for="serie in watching" class="col-4 mb-5" :key="serie.id_serie">
            <div class="card click" style="width: 18rem;">
                <img :src="serie.imagen" class="card-img-top" :alt="serie.nombre_serie" @click="getSeriesDetail(serie.id_serie)">
                <div class="card-body">
                    <p class="card-text text-dark fw-bold">{{serie.nombre_serie}}</p>
                    <p class="card-text text-dark fw-normal">Temporada: {{serie.temporada}} Capitulo: {{serie.capitulo}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.click{
    cursor: pointer;
}
</style>