<script>

import axios from "axios";
import { useToast } from "vue-toastification";

export default {
    setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
    },
    
    data() {
        return {
            name: "",
            last_name: "",
            email: "",
            password: ""
        }
    },

    methods:{
        createUser(){
            let user = {
                "name": this.name,
                "last_name": this.last_name,
                "email": this.email,
                "password":this.password
            }

            console.log(user)

            axios.post("http://localhost:8000/login/register", user)
            .then(response => {
                console.log(response.data)
                
                let { user_created } = response.data

                if(user_created){
                  this.toast.success("Usuario Creado")
                  this.$router.push('/login')
                }
                else{
                  this.toast.error("Error al Crear el Usuario Intente de Nuevo")
                  this.email = ""
                  this.password = ""
                  this.name = ""
                  this.last_name = ""
                }
            })
            .catch(error =>{
              console.log(error)
              app.$toast.error('Error en el Servidor')
            })
        }
    }

}
</script>

<template>
  <div class="d-lg-flex half vh-100 vw-100">
    <div class="bg order-1 order-md-2" style="background-image: url('https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');"></div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Crear Cuenta en <strong>Rolando Movies</strong></h3>
            <p class="mb-4">Donde las Series Nunca Se Te Olvidaran.</p>
            <form v-on:submit.prevent="createUser">
              <div class="form-group first mb-4">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
              </div>
              <div class="form-group first mb-4">
                <label for="last_name">Apellidos</label>
                <input type="text" class="form-control" id="last_name" v-model="last_name" required>
              </div>
              <div class="form-group first mb-4">
                <label for="username">Correo</label>
                <input type="text" class="form-control" id="username" v-model="email" required>
              </div>
              <div class="form-group last mb-5">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div class="d-grid d">
                <input type="submit" value="Crear Cuenta" class="btn btn-primary">  
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  body {
    font-family: "Roboto", sans-serif;
    background-color: #fff; }

  p {
    color: #b3b3b3;
    font-weight: 300; }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Roboto", sans-serif; }

  a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
    a:hover {
      text-decoration: none !important; }

  .content {
    padding: 7rem 0; }

  h2 {
    font-size: 20px; }

  .half, .half .container > .row {
    height: 100vh;
    min-height: 700px; }

  @media (max-width: 991.98px) {
    .half .bg {
      height: 200px; } }

  .half .contents {
    background: #f6f7fc; }

  .half .contents, .half .bg {
    width: 50%; }
    @media (max-width: 1199.98px) {
      .half .contents, .half .bg {
        width: 100%; } }
    .half .contents .form-control, .half .bg .form-control {
      border: none;
      -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 54px;
      background: #fff; }
      .half .contents .form-control:active, .half .contents .form-control:focus, .half .bg .form-control:active, .half .bg .form-control:focus {
        outline: none;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); }

  .half .bg {
    background-size: cover;
    background-position: center; }

  .half a {
    color: #888;
    text-decoration: underline; }

  .half .btn {
    height: 54px;
    padding-left: 30px;
    padding-right: 30px; }

  .half .forgot-pass {
    position: relative;
    top: 2px;
    font-size: 14px; }

  .control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 14px; }
    .control .caption {
      position: relative;
      top: .2rem;
      color: #888; }

  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0; }

  .control__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border-radius: 4px; }

  .control--radio .control__indicator {
    border-radius: 50%; }

  .control:hover input ~ .control__indicator,
  .control input:focus ~ .control__indicator {
    background: #ccc; }

  .control input:checked ~ .control__indicator {
    background: #fb771a; }

  .control:hover input:not([disabled]):checked ~ .control__indicator,
  .control input:checked:focus ~ .control__indicator {
    background: #fb8633; }

  .control input:disabled ~ .control__indicator {
    background: #e6e6e6;
    opacity: 0.9;
    pointer-events: none; }

  .control__indicator:after {
    font-family: 'icomoon';
    content: '\e5ca';
    position: absolute;
    display: none;
    font-size: 16px;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }

  .control input:checked ~ .control__indicator:after {
    display: block;
    color: #fff; }

  .control--checkbox .control__indicator:after {
    top: 50%;
    left: 50%;
    margin-top: -1px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }

  .control--checkbox input:disabled ~ .control__indicator:after {
    border-color: #7b7b7b; }

  .control--checkbox input:disabled:checked ~ .control__indicator {
    background-color: #7e0cf5;
    opacity: .2; }
</style>