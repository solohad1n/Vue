<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Categories />
        <Sort />
      </div>
    </div>
  </div>
  
</template>

<script>
import Categories from '../components/Categories/Categories.vue';
import Sort from '../components/Sort/Sort.vue';

export default {
  components: { Categories, Sort },

}
</script>

<style>

</style>