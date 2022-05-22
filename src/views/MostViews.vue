<script setup>
import SideBar from '../components/SideBar.vue';
import Pagination from '../components/Pagination.vue';
import Carrousel from '../components/Carrousel.vue';
</script>

<template>

    <SideBar/>

    <div class="dashboard">
        
        <div class="p-2">
            <i class="bi bi-calendar-week mx-2 text-primary align-middle"></i>
            <span class="h4 align-middle">Lo Mejor de la Semana</span>
        </div>
        <div class="mt-3 mb-5 mx-auto w-75">
            <Carrousel/>
        </div>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill text-warning align-middle"></i>
        <i class="bi bi-star-fill me-2 text-warning align-middle"></i>
        <span class="h4 align-middle">5 Estrellas</span>

        <div class=" d-flex flex-row justify-content-between align-content-around flex-wrap">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D4.png" alt="">
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

</style>