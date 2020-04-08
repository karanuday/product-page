<template>
  <div class="f-12">
    <span>SELECT SIZE</span><br/>
    <div class="size-picker">
      <span
        v-for="(sizeVal, idx) in sizes"
        :key="idx"
        @click="selectSize(sizeVal.size)"
        :class="{
          'selected': selectedSize === sizeVal.size,
          'disabled': !sizeVal.qty,
          'size-box': 1,
        }">
        {{sizeVal.size}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sizePicker',
  props: {
    sizes: {
      type: Array,
      default: () => [{
        size: 'S',
        qty: 10,
      }, {
        size: 'M',
        qty: 15,
      },  {
        size: 'L',
        qty: 0,
      }, {
        size: 'XL',
        qty: 30,
      }],
    }
  },
  data() {
    return {
      selectedSize: '',
    }
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
      this.$emit('size-change', size);
    }
  }
}
</script>
<style scoped>
.size-picker {
  display: flex;
  margin-top: 10px;
}
.disabled {
  cursor: not-allowed;
  background: lightgray;
  border: 1px solid lightgray !important;
}
.size-box {
  text-align: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  padding: 5px;
  border: 1px solid black;
  margin: 0 5px;
}
.selected {
  border: 2px solid lightgreen;
}
</style>