/* Component to display product image with custom information and images*/
<template>
  <div class="prod-info flex" :class="{'reverse-flex': order === 'flipped'}">
    <div class="prod-info-data f-14" >
      <slot name="prod-info-desc">
        <h2>Product Name</h2>
        <p>
          The OCA is our authentic sneaker that brings you the coolness and spirit of Rio. From airy tropics to chromatic city streets, its an easy to wear silhouette that will take you wherever you want to go with the comfort and support you need. Crafted with exclusive high-end materials, lightweight cushion technology and sophisticated design, it escapes you to your own personal paradise.
        </p>
      </slot>
    </div>
    <div class="prod-info-img" >
      <slot name="prod-info-img">
        <img
          :src="imageUrl"
          class="image"
          alt="Product Image"
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
    },
    displayOrder: {
      // prop to reverse order of info and image display
      type: String,
      default: 'default',
    },
  },
  computed: {
    ...mapGetters([
      'getRandomImage',
    ]),
    imageUrl() {
      return this.imageSrc || this.getRandomImage();
    },
    order() {
      return this.displayOrder === 'flipped' ? this.displayOrder : 'default';
    }
  },
}
</script>

<style scoped>
.reverse-flex {
  flex-direction: row-reverse;
}
.prod-info {
  width: 100%;
  margin: 10px 0;
}
.prod-info-img {
  align-self: center;
}
.prod-info-data {
  flex: 1 0 30%;
  line-height: 26px;
  text-align: left;
  padding: 30px;
}
@media screen and (max-width : 760px) {
  .prod-info-data {
    order: 1 !important;
  }
}
</style>