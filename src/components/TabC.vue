<script setup>
    import OrderMenu from './OrderMenu.vue';
    import { ref } from 'vue';
    const current = ref(1);
</script>
<template>
  <div class="container">
    <ul class="navigation text-select-disabled">
        <li :class="['nav-item', current === 1 ? 'active-tab' : 'not-active-tab']" @click="current = 1">منو سفارش</li>
        <li :class="['nav-item', current === 2 ? 'active-tab' : 'not-active-tab']" @click="current = 2">اطلاعات رستوران</li>
    </ul>
    <div class="tab-content">
        <OrderMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .container {
        position: relative;
        margin-top: 25px;
        width: 100%;
    }
    .navigation {
        list-style-type: none;
        display: flex;
        .nav-item {
            font-size: 13px;
            color: #333333;
            padding: 10px 15px ;
            border-bottom: none;
            cursor: pointer;
            border-radius: 5px 5px 0px 0px;

        }
        position: relative;
        z-index: 2;
    }
    .tab-content {
        border :1px solid  rgb(228, 228, 228);
        width: 70%;
        position: absolute;
        top: 45px;
        min-height: 100vh;
    }
    .active-tab {
        background-color: #fffefe;
        border :1px solid  rgb(228, 228, 228);
    }
    .not-active-tab {
        border: none;
        border-bottom: 1px solid rgb(228, 228, 228)!important;
        background-color: #ffffff;
    }
</style>