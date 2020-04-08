<template>
  <div class="p-info">
    <div class="p-info-customize">
      <Customizer></Customizer>
    </div>
    <ProductInfo></ProductInfo>
    <ProductInfo display-order="flipped">
      <template v-slot:prod-info-desc>
        <h2>Description</h2>
        <ul>
          <li>Upper: Suede</li>
          <li>Lining: Cotton Canvas </li>
          <li>Sole: 100% slip-resistant rubber</li>
          <li>Insole: Removable lightweight memory foam, vegetable tanned leather with debossed CARIUMA logo </li>
          <li>Laces: Debossed metal aglets and eyelets</li>
          <li>Construction: Handmade vulcanized sneaker; stitched midsole</li>
        </ul>
      </template>
    </ProductInfo>
    <ProductInfo>
      <template v-slot:prod-info-desc>
        <h2>Signature Insole</h2>
        <p>CARIUMA’s signature insoles are crafted with a hybrid of memory foam and natural vegetable tanned leather, for the optimal comfort. Using an EVA & rubber compound, we have created an insole that is lightweight and resilient, completed with debossed logo on the top and on the side.</p>
      </template>
      <!-- <template v-slot:prod-info-img>
        <div style="background: red; width: 40%; height: 50%;"></div>
      </template> -->
    </ProductInfo>
    <ProductInfo display-order="flipped">
      <template v-slot:prod-info-desc>
        <DeliveryInfo></DeliveryInfo>
      </template>
      <!-- <template v-slot:prod-info-img>
        <div style="background: red; width: 40%; height: 50%;"></div>
      </template> -->
    </ProductInfo>
    <Recommended></Recommended>
    <ProductReview></ProductReview>
  </div>
</template>

<script>
import DeliveryInfo from '@/components/DeliveryInfo.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import Customizer from '@/components/Customizer.vue';
import Recommended from '@/components/Recommended.vue';
import ProductReview from '@/components/ProductReview.vue';

export default {
  name: 'ProductPage',
  components: { DeliveryInfo, ProductInfo, Customizer, Recommended, ProductReview },
  mounted() {
    console.log('IN HERE');
    this.$store.dispatch('fetchImages');
  }
}
</script>

<style scoped>
.p-info {
  padding: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>