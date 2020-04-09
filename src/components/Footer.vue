<template>
  <div class="flex footer invert-colors f-14">
    <div class="col-flex footer-col">
      <b>SHOP</b>
      <span>CATIBA</span>
      <span>OCA</span>
    </div>
    <div class="col-flex footer-col">
      <b>SUPPORT</b>
      <span>FAQ</span>
      <span>Returns</span>
      <span>Live Chat</span>
    </div>
    <div class="col-flex footer-col">
      <b>ABOUT</b>
    </div>
    <div class="col-flex footer-col">
      <b>BLOG</b>
    </div>
    <div class="col-flex footer-col">
      <b>POP UP STORES</b>
    </div>
    <div class="col-flex footer-col">
      <b>NEWSLETTER</b>
      <div>
        <input type="email" class="email-input invert-colors">
        <button class="invert-colors email-input-btn">JOIN US</button>
      </div>
    </div>
    <hr>
    <div class="footer-copyright">
      Copyright © 2019 CARIUMA. All Rights Reserved. 
      <router-link to="/">Terms of Use</router-link> |
      <router-link to="/">Privacy Policy</router-link>
    </div>
  </div>
</template>

<style scoped>
hr {
  border-color: #727272;
  width: 100%;
  margin: 65px 0 0;
}
a {
  text-decoration: underline;
}
.email-input {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid white;
  margin-right: 5px;
}
.email-input-btn {
  padding: 10px;
  border: 2px solid white;
}
.footer {
  width: -webkit-fill-available !important;
  padding: 50px 30px 0;
  justify-content: space-between;
  flex-wrap: wrap;
}
.col-flex {
  align-items: flex-start;
  line-height: 30px;
  font-size: 12px;
}
.footer-copyright {
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 12px;
  color: #727272;
  line-height: 15px;
}

@media screen and (max-width : 760px) {
  .footer-col {
    display: none;
  }
  .footer-col:nth-child(6) {
    display: block;
  }
}
</style>