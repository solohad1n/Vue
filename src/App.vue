<template>
  <div class="wrapper">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
    components: { Header }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
