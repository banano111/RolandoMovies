<script >
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
import { userStore } from "./stores/user";

export default {
    setup() {
      const store = userStore();
      // Make it available inside methods
      return { store }
    },
    components: { SideBar }
}

</script>

<template>
  <div class="app">
    <div v-if="this.store.is_auth == true">
      <SideBar/>
    </div>
    <RouterView/>
  </div>
</template>

<style>
.app {
  display: flex;
}
</style>
