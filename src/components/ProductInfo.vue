<template>
  <div class="prod-info flex">
    <div class="prod-info-data f-14" :style="{'order': order === 'flipped' ? 1 : 0}">
      <slot name="prod-info-desc">
        <h2>Product Name</h2>
        <p>
          The OCA is our authentic sneaker that brings you the coolness and spirit of Rio. From airy tropics to chromatic city streets, its an easy to wear silhouette that will take you wherever you want to go with the comfort and support you need. Crafted with exclusive high-end materials, lightweight cushion technology and sophisticated design, it escapes you to your own personal paradise.
        </p>
      </slot>
    </div>
    <div class="prod-info-img" :style="{'order': order === 'flipped' ? 0 : 1}">
      <slot name="prod-info-img">
        <img
          :src="imageUrl"
          class="image"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductInfo',
  props: {
    imageSrc: {
      type: String,
      default: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    },
    displayOrder: {
      type: String,
    },
  },
  computed: {
    ...mapGetters([
      'getRandomImage',
    ]),
    imageUrl() {
      console.log(this.getRandomImage());
      return this.getRandomImage() || this.imageSrc;
    },
    order() {
      return this.displayOrder === 'flipped' ? this.displayOrder : 'default';
    }
  },
}
</script>

<style scoped>
.image {
  /* max-width: 300px; */
  max-height: 300px;
}
.prod-info {
  width: 100%;
  margin: 10px 0;
}
.prod-info-img {
  align-self: center;
  /* flex-basis: auto;
  flex: 1; */
  /* height: 500px; Could have used an scss variable here instead for common height val */
}
.prod-info-data {
  flex: 1 0 30%;
  line-height: 26px;
  text-align: left;
  padding: 30px;
}
@media screen and (max-width : 760px) {
  .prod-info-data {
    order: 2 !important;
  }
}
</style>