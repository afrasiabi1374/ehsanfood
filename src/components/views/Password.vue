<script setup>
    import { ref } from 'vue';
import { useStore } from 'vuex';
    import InputC from '../InputC.vue'
    const store = useStore()
    const password = ref('')
    const repeatPassword = ref('')
    const changePass =  (first, second) => {
        if (first == second) {
            store.commit('changePass', first)
            console.log(store.getters.targetUser);
        }
    }
</script>
<template>
    <form class="pass-container">
        <InputC   v-model="password"  class="input" inputLabel='رمز جدید' inputWidth="400px" inputType="text" />
        <InputC   v-model="repeatPassword"  class="input" inputLabel='تایید رمز جدید' inputWidth="400px" inputType="text" />
        <button class="send-sms-btn flex-center c-pointer" @click.prevent="changePass(password,repeatPassword)">ذخیره اطلاعات</button>
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