<script setup>
import SideBar from '../components/SideBar.vue';
import ContinuarViendo from '../components/ContinuarViendo.vue';

</script>


<template>
    
    <SideBar/>
    <div class="dashboard">
        <ContinuarViendo/>
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Mis Series</span>

        <div class=" d-flex flex-row justify-content-between align-content-around flex-wrap">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D4.png" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25 mt-4" src="../assets/D4.png" alt="">
        </div>
    </div>

</template>


<style>
.dashboard {
    margin-top: 3rem;
    margin-left: 3rem;
    max-width: 70%;
}

.w-25 {
    width: 23% !important;
}

</style>