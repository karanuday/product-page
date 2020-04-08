<template>
  <div class="nav">
    <div class="nav-news-banner invert-colors">
      <span>FREE US SHIPPING & RETURN</span>
    </div>
    <div class="flex nav-nav-bar">
      <div class="nav-nav-tabs align-center expand text-left">
        <router-link to="/">SHOP</router-link>
        <router-link to="/about">ABOUT</router-link>
      </div>
      <div class="nav-nav-bar-hamburger align-center expand">
        <f-icon icon="bars" @click="toggleListNav()"></f-icon>
      </div>
      <div class="nav-nav-bar-list-menu" v-if="showNav">
        <ul>
          <li @click="toggleListNav()"><router-link to="/">SHOP</router-link></li>
          <li @click="toggleListNav()"><router-link to="/about">ABOUT</router-link></li>
        </ul>
      </div>
      <img :src="require('@/assets/logo.png')" alt="" class="nav-nav-logo">
      <div class="nav-actions expand align-center text-right">
        <f-icon :icon="['far', 'user']" class="user-icon"></f-icon>
        <f-icon icon="shopping-cart" class="bag-icon"></f-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      showNav: false,
    }
  },
  methods: {
    toggleListNav() {
      this.showNav = !this.showNav;
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  border-bottom: 1px solid black;
  background: white;
  padding: 10px;
  cursor: pointer;
}
li:nth-last-child(1) {
  border-bottom: 0px;
}
a {
  margin: 20px;
}
.user-icon, .bag-icon {
  margin: 10px;
}
.nav-news-banner {
  width: -webkit-fill-available !important;
  padding: 10px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
}
.nav-nav-bar {
  border-bottom: 1px solid #F1F1F1;
  flex-wrap: wrap;
  padding: 30px 40px 25px;
  justify-content: space-between;
  align-items: center;
}
.nav-nav-logo {
  margin: 10px 20px;
}                  
.expand {
  flex: 1 1 30%;
}
.nav-nav-bar-hamburger {
  /* padding: 30px 40px 25px; */
  display: none;
}
.nav-nav-bar-list-menu {
  border: 1px solid black;
  position: absolute;
  top: 30%;
}
@media screen and (max-width : 760px) {
  .nav-nav-tabs {
    display: none;
  }
  .nav-nav-bar-hamburger {
    display: inline-block;
  }
  .nav-nav-bar {
    padding-left: 15px;
    padding-right: 15px;
  }
  .expand {
    flex: 1 1 auto;
  }
}
</style>