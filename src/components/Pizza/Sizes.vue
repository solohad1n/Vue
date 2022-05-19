<template>
  <ul>
    <li
      @click="handleActiveSize(index)"
      :class="{
        active: activeSize === index,
        disabled: !availableSizes.includes(item),
      }"
      v-for="(item, index) in sizesItem"
      :key="item"
    >
      {{ item }} см.
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["availableSizes"],
  setup(props) {
    const sizesItem = [26, 30, 40];
    const activeSize = ref(0);
    const handleActiveSize = (index) => {
      activeSize.value = index;
    };

    if (sizesItem[0] !== props.availableSizes[0]) {
      activeSize.value = sizesItem.findIndex(
        (item) => item === props.availableSizes[0]
      );
    }

    return { sizesItem, activeSize, handleActiveSize };
  },
};
</script>

<style >
</style>