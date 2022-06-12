<script setup>
    import InputC from '../InputC.vue'
    import RadioC from '../RadioC.vue'
    import { ref } from 'vue';
    import DatePicker from 'vue3-persian-datetime-picker'
    import { useStore } from 'vuex';

    const store = useStore()
    const userInfo = store.getters.targetUser

    const fullName = ref(userInfo.fullName)
    const mobile = ref(userInfo.phoneNumber)
    const email = ref(userInfo.email)
    const date = ref(userInfo.birthDate)
    const gender = ref(userInfo.gender)
</script>
<template>
    <form class="info-container flex-center">
        {{userInfo}}
        <InputC    v-model="fullName"  class="info-input" inputLabel='نام و نام خانوادکی' inputWidth="220" inputType="text" />
        <InputC   v-model="mobile"  class="info-input" inputLabel='شماره موبایل' inputWidth="220" inputType="text" />
        <InputC   v-model="email"  class="info-input" inputLabel='ایمیل' inputWidth="220" inputType="text" />
            <date-picker class="info-input" v-model="date"></date-picker>{{date}}
        <div class="gender">
            <h5>جنسیت:</h5>
            <RadioC  v-model="gender" inputLabel='مرد' name="gender" val="مرد" />
            <RadioC  v-model="gender" inputLabel='زن'  name="gender" val="زن" />
        </div>
        <div class="date-gender">

        </div>
        <button class="send-sms-btn flex-center c-pointer">ذخیره اطلاعات</button>
    </form>
</template>

<style lang="scss" scoped>
    .info-container {
        width: 600px;
        margin: auto;
        flex-wrap: wrap;
        margin-top: 15px;
        gap: 5px;
    }
    .info-input {

        margin-top: 25px;
        width: 40%;
        
    }

    .gender {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 15px;
        gap: 60px;
    }
    .date-gender {
        width: 500px;
        margin-top: 25px;
        display: flex;
        gap: 10px;
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
</style>