<script>
import SideBar from '../components/SideBar.vue';
import Pagination from '../components/Pagination.vue';
import { seriesStore } from "../stores/series";

export default {

    setup() {
        const store = seriesStore();

        return { store }
    },

    data() {
        return {
            series: {},
            is_ready: false,
            filter_value: 0
        }
    },

    methods: {
        setFilter(value) {
            this.filter_value = value
        }
    },

    mounted() {
        this.series = this.store.getSeries()
        this.is_ready = true
    },

    computed: {
        filtroTotal() {
            if (this.filter_value == 1) {
                return this.series.filter(serie => serie.genero == "Accion")
            }

            else if (this.filter_value == 2) {
                return this.series.filter(serie => serie.genero == "Comedia")
            }

            else if (this.filter_value == 3) {
                return this.series.filter(serie => serie.genero == "Anime")
            }

            else if (this.filter_value == 4) {
                return this.series.filter(serie => serie.genero == "Terror")
            }
            else {
                return this.series
            }
        }
    }

}

</script>

<template>
    <div class="dashboard">

        <div class="bg-secondary mb-4 text-white p-2 d-flex justify-content-between align-items-center">
            <div>Filtros</div>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Género de la Serie
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li class="dropdown-item" @click="setFilter(1)">Accion</li>
                    <li class="dropdown-item" @click="setFilter(2)">Comedia</li>
                    <li class="dropdown-item" @click="setFilter(3)">Anime</li>
                    <li class="dropdown-item" @click="setFilter(4)">Terror</li>
                    <li class="dropdown-item" @click="setFilter(0)">Todos</li>
                </ul>
            </div>
        </div>
        <div class="row row-cols-3" v-if="is_ready">
            <div v-for="serie in filtroTotal" class="col">
                <figure class="figure">
                    <img v-bind:src="serie.imagen" class="figure-img img-fluid rounded" :key="serie.id_serie"
                        alt="serie.nombre_serie">
                    <figcaption class="figure-caption text-center text-black">{{ serie.nombre_serie }}</figcaption>
                </figure>
            </div>
        </div>
        <div v-else class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <div class="d-flex justify-content-center mt-1s">
            <Pagination />
        </div>

    </div>



</template>

<style scoped>
.dashboard {
    margin-top: 2.5rem;
    margin-left: 3rem;
    max-width: 70%;
}
</style>