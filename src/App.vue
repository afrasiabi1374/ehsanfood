<script setup>
  import HeaderC from './components/layouts/HeaderC.vue';
</script>

<template>
  <HeaderC/>
      <router-view></router-view>
</template>

<style lang="scss" scoped>
  .tab-basket-container {
    margin: auto;
    margin-top: 10px;
  }
</style>