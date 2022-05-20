<script setup>
import SideBar from '../components/SideBar.vue';
import Carrousel from '../components/Carrousel.vue';

</script>

<template>
 <div class="dashboard">
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Series Populares</span>

        <div class="grid">
            <img class="rounded w-25 h-25 empuje" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D4.png" alt="">
        </div>
        <div class="mt-5">
            <i class="bi bi-pin-fill mx-2 text-danger align-middle"></i>
            <span class="h4 align-middle">Continuar Viendo</span>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/D5.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-dark fw-bold">{Nombre Serie}</p>
                        <p class="card-text text-dark fw-normal">{Temporada} {Capitulo}</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/D6.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-dark fw-bold">{Nombre Serie}</p>
                        <p class="card-text text-dark fw-normal">{Temporada} {Capitulo}</p>
                    </div>
                </div>
            </div>
            <div class="col-4 mb-5">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/D7.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-dark fw-bold">{Nombre Serie}</p>
                        <p class="card-text text-dark fw-normal">{Temporada} {Capitulo}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <i class="bi bi-star-fill mx-2 text-warning align-middle"></i>
        <span class="h4 align-middle">Series Populares</span>

        <div class="grid">
            <img class="rounded w-25 h-25 empuje" src="../assets/D1.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D2.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D3.jpg" alt="">
            <img class="rounded w-25 h-25 empuje" src="../assets/D4.png" alt="">
        </div>
    </div>
</template>

<style>
.dashboard {
    margin-top: 3rem;
    margin-left: 3rem;
    max-width: 70%;
}

.empuje {
    margin-right: 15px;
}

.w-25 {
    width: 23% !important;
}

.grid {
    margin-top: 10px;
}

</style>