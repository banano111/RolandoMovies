<script setup>
import SideBar from '../components/SideBar.vue';
import Pagination from '../components/Pagination.vue';
</script>

<template>

    <SideBar />
    <div class="dashboard">

        <div class="bg-secondary mb-4 text-white p-2 d-flex justify-content-between align-items-center">
            <div>Filtros</div>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Género de la Serie
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Acción</a></li>
                    <li><a class="dropdown-item" href="#">Comedia</a></li>
                    <li><a class="dropdown-item" href="#">Anime</a></li>
                    <li><a class="dropdown-item" href="#">Terror</a></li>
                </ul>
            </div>
        </div>


        <div class="row row-cols-3">
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
            <div class="col">
                <figure class="figure">
                    <img src="../assets/D1.jpg" class="figure-img img-fluid rounded" alt="...">
                    <figcaption class="figure-caption text-center text-black">{Nombre de la Serie}</figcaption>
                </figure>
            </div>
        </div>
        
        <div class="d-flex justify-content-center mt-1s">
            <Pagination/>
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