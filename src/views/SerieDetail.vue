<script>
import { seriesStore } from "../stores/series";
import { userStore } from "../stores/user";
import { useToast } from "vue-toastification";
import axios from "axios";

export default {

    setup() {
        const store = seriesStore();
        const toast = useToast();
        const store2 = userStore();

        return { store, store2, toast }
    },

    data() {
        return {
            series: {},
            is_ready: false,
            serie: {},
            imagen: String
        }
    },

    methods: {
        setFilter(value) {
            this.filter_value = value
        },

        getSeriesDetail(id_serie) {
            this.$router.push("/series/" + id_serie)
        },

        addSeriesUser(){
            let new_serie = {
                "id_usuario": this.store2.user_id,
                "id_serie": this.$route.params.id,
                "imagen": this.imagen,
            }
            console.log(new_serie)
            axios.post("http://localhost:8000/series/userSeries", new_serie)
            .then(response => {
                console.log(response.data)
                
                let { userSeries_added } = response.data

                if(userSeries_added){
                  this.toast.success("Se agrego la Serie Correctamente")
                }
                else{
                  this.toast.error("Error al Agregar la Serie")
                }
            })
            .catch(error =>{
              console.log(error)
              this.toast.error("Ya tienes Esta Serie Agregada")
            })
        }
    },

    mounted() {
        this.series = this.store.getSeries()
        this.is_ready = true
        this.serie = this.series.filter(serie => serie.id_serie == this.$route.params.id)
        this.serie.map(serie =>{
            this.imagen = serie.imagen
        })
        
    },

}
</script>


<template>
    <div v-if="is_ready" v-for="serie in serie" class="dashboard">
        <div class="row">
            <div class="col">
                <h4 class="mb-4">{{ serie.nombre_serie }}</h4>
            </div>
            <div class="col d-flex justify-content-end h-75">
                <button class="btn btn-success me-3" @click="addSeriesUser()">
                    <i class="bi bi-star-fill text-warning me-2"></i>Agregar a Mis Series
                </button>
                <button class="btn btn-success">
                    <i class="bi bi-pin-fill text-danger me-2"></i>Continuar Viendo
                </button>
            </div>
        </div>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <span class="h5 ms-2 align-middle">Calificación</span>

        <p class="mt-4 h6"><b>Género: </b>{{ serie.genero }}</p>

        <div class="row mt-5">
            <div class="col-5 d-flex align-items-center">
                {{ serie.descripcion }}
            </div>
            <div class="col-7">
                <img class="img-fluid" :src="serie.imagen" alt="">
            </div>
        </div>

    </div>
    <div v-else class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

</template>


<style scoped>
.dashboard {
    margin-top: 6rem;
    margin-left: 3rem;
    max-width: 70%;
}

.w-25 {
    width: 23% !important;
}
</style>