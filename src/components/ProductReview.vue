<template>
  <div class="reviews">
    <div class="reviews-header">
      <h1>Reviews</h1>
    </div>
    <div class="reviews-overall-ratings flex">
      <div class="reviews-overall-ratings-left">
        <div class="col-flex">
          <span><b>OVERALL RATING</b></span>
          <Stars :rating="4"><b>4</b></Stars>
          <button class="rate-item-btn">RATE THIS ITEM</button>
        </div>
      </div>
      <div class="reviews-overall-ratings-right">
        <div class="col-flex">
          <Stars :rating="5">  62% [96]</Stars>
          <Stars :rating="4">  22% [46]</Stars>
          <Stars :rating="3">  12% [16]</Stars>
          <Stars :rating="2">  2% [3]</Stars>
          <Stars :rating="1">  2% [1]</Stars>
        </div>
      </div>
    </div>
    <div class="reviews-list">
      <hr style="border: 1px solid #f1f1f1;">
      <Review
        v-for="(review, idx) in reviews"
        :key="idx"
        :review="review"
      ></Review>
    </div>
  </div>
</template>

<script>
import Stars from '@/micro-components/Stars.vue';
import Review from '@/micro-components/Review.vue';
import Reviews from '@/ReviewData.js';

export default {
  name: 'ProductReview',
  components: { Stars, Review },
  data() {
    return {
      reviews: Reviews,
    }
  },
}
</script>

<style scoped>
.reviews {
  font-size: 12px;
  line-height: 20px;
  margin: 30px;
}
.reviews-header {
  width: -webkit-fill-available !important;
  padding: 10px;
  text-align: center;
}
.reviews-overall-ratings-left, .reviews-overall-ratings-right {
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 200px;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
  margin: 0 5px 5px 0;
  background: #f1f1f1;
}
.reviews-overall-ratings {
  justify-content: space-between;
}
.reviews-overall-ratings-left {
  flex: 1 0 40%;
  padding: 40px;
}
.rate-item-btn {
  letter-spacing: 2px;
  min-width: 170px;
  padding: 20px 30px;
  margin: 10px 0;
  background: #7DC242;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
}
</style>