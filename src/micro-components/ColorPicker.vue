<template>
  <div class="f-12">
    <span>SELECT COLOR</span><br/>
    <div class="color-picker">
      <span
        v-for="(colorVal, idx) in colors"
        :key="idx"
        :style="{'background': colorVal}"
        @click="selectColor(colorVal)"
        :class="{'selected': selectedColor === colorVal, 'color-bubble': 1}">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColorPicker',
  props: {
    colors: {
      type: Array,
      default: () => ['#BB0D0F', '#FFEF06', '#01AE46']
    }
  },
  data() {
    return {
      selectedColor: '',
    }
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
      this.$emit('color-change', color);
    }
  }
}
</script>
<style scoped>
.color-picker {
  display: flex;
  margin-top: 10px;
}
.color-bubble {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  cursor: pointer;
  border: 0.5px solid lightgray;
  margin: 0 5px;
}
.selected {
  border: 2px solid black;
}
</style>