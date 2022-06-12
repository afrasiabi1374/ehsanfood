<script setup>
    import { ref } from 'vue';
    import InputC from '../InputC.vue'

    const password = ref('')
</script>
<template>
    <form class="pass-container">
        <InputC   v-model="password"  class="input" inputLabel='رمز جدید' inputWidth="400px" inputType="text" />
        <InputC   v-model="password"  class="input" inputLabel='تایید رمز جدید' inputWidth="400px" inputType="text" />
        <button class="send-sms-btn flex-center c-pointer">ذخیره اطلاعات</button>
    </form>
</template>
<style lang="scss" >
    .pass-container {
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
    .input‌ { 
        margin-top: 20px;
    }
</style>