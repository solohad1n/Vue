<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <PizzaList :pizzas="pizzas" />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories/Categories";
import Sort from "@/components/Sort/Sort";
import PizzaList from "../components/Pizza/List.vue";
import { computed, onMounted } from "@vue/runtime-core";
import {useStore} from 'vuex';
export default {
  components: { Categories, Sort, PizzaList},
  setup() {
    const store = useStore();
    const pizzas = computed(() => store.state.pizzas)

    onMounted(() => {
      store.dispatch('getPizzas')
    });
    return { pizzas };
  },
};
</script>

<style>

</style>