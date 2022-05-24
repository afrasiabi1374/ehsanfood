<script setup>
  import HeaderC from './components/layouts/HeaderC.vue';
  import TabC from './components/TabC.vue';
  import BasketC from './components/BasketC.vue';
  import ModalC from './components/ModalC.vue';
  import { ref } from 'vue';
  const modalStatus = ref(false)
</script>

<template>
  <HeaderC/>
  <div class="nineteen tab-basket-container">
    <TabC />
    <BasketC @click="modalStatus=!modalStatus"/>
    <ModalC v-model="modalStatus"/>
  </div>
</template>

<style lang="scss" scoped>
  .tab-basket-container {
    margin: auto;
    margin-top: 10px;
  }
</style>