<template>
  <div id="app">
    <div id="nav">
      <Header-Bar></Header-Bar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
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
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
