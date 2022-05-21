<script setup>
import SideBar from '../components/SideBar.vue';
import ContinuarViendo from '../components/ContinuarViendo.vue';

</script>

<template>
 <SideBar/>
 <div class="dashboard">
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Series Populares</span>

        <div class="mt-3 d-flex justify-content-between">
            <img class="rounded w-25 h-25" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/D4.png" alt="">
        </div>
        
        <div class="mt-5">
            <ContinuarViendo/>
        </div>
        
        <i class="bi bi-tags-fill mx-2 text-success align-middle"></i>
        <span class="h4 align-middle">Categorias</span>

        <div class="mt-3 d-flex justify-content-between">
            <img class="rounded w-25 h-25" src="../assets/G1.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/G2.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/G3.jpg" alt="">
            <img class="rounded w-25 h-25" src="../assets/G4.jpg" alt="">
        </div>
    </div>
</template>

<style>
.dashboard {
    margin-top: 2.5rem;
    margin-left: 3rem;
    max-width: 70%;
}

.w-25 {
    width: 23% !important;
}

</style>