<template>
  <div class="categories">
    <ul>
      <li
        @click="handleChangeActiveItem(null)"
        :class="{ active: handleActiveItem === null }"
      >
        Все
      </li>
      <li
        :class="{ active: handleActiveItem === index }"
        @click="handleChangeActiveItem(index)"
        v-for="(item, index) in categoriesItems"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const handleActiveItem = computed(() => store.state.category);
    const categoriesItems = [
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    const handleChangeActiveItem = (index) => {
      store.dispatch("setCategory", index);
    };

    return { categoriesItems, handleActiveItem, handleChangeActiveItem };
  },
};
</script>

<style>
</style>