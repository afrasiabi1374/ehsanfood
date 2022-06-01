<script setup>
  import HeaderC from './components/layouts/HeaderC.vue';
</script>

<template>
  <HeaderC/>
    <div class="nineteen tab-basket-container">
      <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
  .tab-basket-container {
    margin: auto;
    margin-top: 10px;
  }
</style>