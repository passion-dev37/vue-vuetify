<template>
  <v-app id="app" style="background: linear-gradient(to right, #d3fbad, #d3fbad, #b6eae1);">
    <MainComponent msg="Vuetify Example"></MainComponent>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
