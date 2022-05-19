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
import Categories from '../components/Categories/Categories.vue';
import Sort from '../components/Sort/Sort.vue';
import PizzaList from '../components/Pizza/List.vue';

export default {
  components: { Categories, Sort, PizzaList },

}
</script>

<style>

</style>