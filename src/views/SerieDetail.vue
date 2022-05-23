<script>


</script>


<template>
    <div class="dashboard">
        <p>{{ $route.params.id }}</p>
        <div class="row ">
            <div class="col">
                <h4 class="mb-4">{Nombre Serie}</h4>
            </div>
            <div class="col d-flex justify-content-end h-75">
                <button class="btn btn-success me-3">
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
        <i class="bi bi-star-fill text-warning align-middle me-2"></i>
        <span class="h5 align-middle">Calificación</span>

        <p class="mt-4 h6"><b>Género:</b> {Genero Serie}</p>

        <div class="row mt-5">
            <div class="col-5 d-flex align-items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio libero, dignissim at mauris id,
                venenatis tempus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget elit lectus.
                Integer non ultrices purus. Maecenas efficitur tellus ipsum, ut commodo sapien convallis ut. Vivamus
                urna massa, semper quis velit gravida, hendrerit tempus diam. Mauris faucibus ligula sit amet sapien
                scelerisque blandit.
            </div>
            <div class="col-7">
                <img class="img-fluid" src="../assets/D1.jpg" alt="">
            </div>
        </div>

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
</style>