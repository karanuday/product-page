<template>
  <div class="review">
    <div class="review-gist flex">
      <span style="line-height: 25px; font-weight: bold;">{{review.gist}} |</span>
      <Stars :rating="review.rating">{{review.rating}}</Stars>
    </div>
    <div class="review-content">
      <span class="review-content-name"><b>{{review.username}}</b> <span class="review-content-location">({{review.location}})</span></span>
      <h4 class="no-margin review-content-headline">{{review.headline}}</h4>
      <p>{{review.review}}</p>
    </div>
    <hr>
  </div>
</template>
<script>
import Stars from '@/micro-components/Stars.vue';

export default {
  name: 'Review',
  components: { Stars },
  props: {
    review: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style scoped>
hr {
  border: 1px solid #f1f1f1;
}
p {
  margin-top: 0;
}
.review {
  margin: 10px 0;
  line-height: 32px;
}
.review-content {
  clear: right;
}
.review-gist {
  float: right;
}
.review-content-location {
  color: #8d8d8d;
  font-style: italic;
}
.review-content-name, .review-content-location {
  font-size: 18px;
}
@media screen and (max-width : 760px) {
  .review-content-headline {
    font-size: 16px;
    color: #8d8d8d;
  }
}
</style>