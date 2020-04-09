// Component to allow user to customize the product selection

<template>
  <div class="customizer flex">
    <div class="customizer-left col-flex">
      <div class="customizer-left-info flex">
        <div class="customizer-left-info-name text-left">
          <h3 class="no-margin">Red Canvas</h3>
          <span>OCA LOW</span>
        </div>
        <div class="customizer-left-info-review text-right">
          <span>$79</span><br/>
          <Stars :rating="5" class="f-12">154 reviews</Stars>
        </div>
      </div>
      <div class="customizer-color-picker m-t-40">
        <ColorPicker @color-change="updateProduct"></ColorPicker>
      </div>
      <div class="customizer-size-picker m-t-40">
        <SizePicker></SizePicker>
      </div>
      <div class="customizer-add-to-cart m-t-40">
        <button class="customizer-add-to-cart-btn">ADD TO BAG</button><br/>
        <span>Worldwide Shipping  +  Free Returns</span>
      </div>
    </div>
    <div class="customizer-right">
      <img
        :key="productUpdate"
        :src="getRandomImage()"
        class="image"
        alt="Product Image"
      />
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/micro-components/ColorPicker.vue';
import SizePicker from '@/micro-components/SizePicker.vue';
import Stars from '@/micro-components/Stars.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Customizer',
  components: { ColorPicker, SizePicker, Stars },
  data() {
    return {
      productUpdate: 0,
    }
  },
  methods: {
    updateProduct() {
      this.productUpdate += 1;
    }
  },
  computed: {
    ...mapGetters([
      'getRandomImage',
    ]),
  }
}
</script>

<style scoped>
.customizer-left {
  flex: 1 0 30%;
  padding: 30px;
}
.customizer-right {
  align-self: center;
  width: auto;
  margin: 0 auto;
}
.customizer-left-info {
  justify-content: space-between;
}
.customizer-add-to-cart-btn {
  letter-spacing: 2px;
  min-width: 200px;
  width: 230px;
  padding: 20px 30px;
  margin: 10px 0;
  background: #7DC242;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
}
@media screen and (max-width : 760px) {
  .customizer-left {
    order: 1;
  }
  .customizer-add-to-cart-btn {
    width: 100%;
  }
}
</style>