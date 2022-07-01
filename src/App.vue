<script setup>
  import HeaderC from './components/layouts/HeaderC.vue';
import FooterC from './components/layouts/FooterC.vue';
</script>

<template>
  <div class="main-container">
    <HeaderC/>
    <router-view></router-view>
    <FooterC/>
  </div>
</template>

<style lang="scss" scoped>
  .main-container {
    display: flex;
    flex-direction: column;
  }
</style>