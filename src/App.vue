<template>
  <div id="app">
    <div id="nav">
      <Header-Bar></Header-Bar>
    </div>
    <router-view/>
    <Footer-Bar></Footer-Bar>
  </div>
</template>
<script>
import FooterBar from '@/components/Footer.vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'App',
  components: { FooterBar, HeaderBar },
}
</script>

<style lang="scss">
#app {
  font-family: GothamHTF-Book, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
