<template>
  <div class="inline-flex">
    <div>
      <f-icon
        icon="star"
        v-for="num in ratingVal"
        class="lit"
        :key="num">
      </f-icon>
      <f-icon
        :icon="['far', 'star']"
        v-for="num in (5 - ratingVal)"
        class="lit"
        :key="num">
      </f-icon>
    </div>
    <span class="rating-slot">
      <slot>
      </slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Stars',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ratingVal() {
      return Math.floor(parseInt(this.rating));
    }
  },
}
</script>
<style scoped>
.inline-flex {
  display: inline-flex;
  max-width: 200px;
  justify-content: space-between;
}
.lit {
  color: #7DC242;
  margin: 5px;
}
.rating-slot {
  line-height: 25px;
  margin-left: 15px;
}
</style>