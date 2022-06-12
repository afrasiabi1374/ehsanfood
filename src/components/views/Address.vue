<script setup>
    import { ref } from 'vue';
    import InputC from '../InputC.vue'

    const address = ref('')
    const addressName = ref('')
</script>
<template>
    <form class="add-container">
        <InputC   v-model="addressName"  class="input-address-name " inputLabel='نام آدرس' inputWidth="20%" inputType="text" />
        <InputC   v-model="address"      class="input-address" inputLabel='ورود آدرس' inputWidth="100%" inputType="text" />
        <button class="send-sms-btn flex-center c-pointer">ذخیره آدرس</button>
    </form>
</template>
<style lang="scss" >
    .add-container {
        width: 30%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
        gap: 15px;
    }
    .send-sms-btn {
      width: 110px;
      text-align: center;
      height: 40px;
      transition: all .3s;
      border: 1px solid #022F5E;
      color: #022F5E;
      border-radius: 10px;
      margin-top: 20px;
      font-size: 13px;
      margin: auto;
      &:hover {
        transition: all .3s;
        background-color: #022F5E;
        color: white;

      }
    }

    .input-address-name {
        width: 30%;
    }
    .input-address {
        width: 80%;
    }
</style>