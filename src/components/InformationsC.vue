<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";

import DatePicker from 'vue3-persian-datetime-picker'
import { useStore } from 'vuex';
import InputC from './InputC.vue';
import RadioC from './RadioC.vue';
const emit = defineEmits(['nextLevel','closeModal'])
const props = defineProps({
    phoneNumber: Number,
    levelNumber: Number
})
const fullName = ref('')
const password = ref('')
const email = ref('')
const gender = ref('')
const date = ref('')
const { cookies } = useCookies();
const router = useRouter()
const goback = () => {
    emit('update:levelNumber', 0)
}

const store = useStore()

const addUser = () => {
    document.body.style.overflow = 'scroll'
    const allInformations = reactive({
    fullName: fullName.value,
    password: password.value,
    email: email.value,
    password: password.value,
    gender: gender.value,
    phoneNumber: props.phoneNumber,
    birthDate: date.value
})
const allUsers = ref(store.getters.allUsers)
if (allUsers.value.find(user => user.phoneNumber === props.phoneNumber)) {
    alert('شماره تلفن وارد شده تکراری است .')
}else {
    store.commit('saveUser',  {...allInformations})
    cookies.set('userCookie',props.phoneNumber, '10d')
    store.commit('setActiveUser', props.phoneNumber)
    emit('closeModal', false)
    console.log('کوکی ها',cookies.get('userCookie'));
    console.log('غیر تکراری', allUsers.value); 
    router.push('/profile/informations')
}
    
    console.log();
}
</script>

<template>
    <div class="information-container flex-column-center" @click.stop>
        <small class="go-back pointer" @click="goback">برگشت</small>
        <h5 class="send-sms-title">
            اطلاعات تکمیلی (ضروری)
        </h5>
        <InputC   v-model="fullName"  class="info-input" inputLabel='نام و نام خانوادکی' inputWidth="300" inputType="text" />
        <InputC   v-model="password"  class="info-input" inputLabel='رمز عبور' inputWidth="300" inputType="password" />
        <InputC   v-model="email"  class="info-input" inputLabel='ایمیل' inputWidth="300" inputType="text" />
        <div class="gender">
            <h5>جنسیت:</h5>
            <RadioC  v-model="gender" inputLabel='مرد' name="gender" val="مرد" />
            <RadioC  v-model="gender" inputLabel='زن'  name="gender" val="زن" />
        </div>
        <div class="birth-date">
            <h5>  تاریخ تولد :  </h5>
            <date-picker  width="50px" v-model="date"></date-picker>
        </div>
        <div class="send-sms-btn flex-center c-pointer" @click="addUser">ذخیره اطلاعات</div>
    </div>
</template>
<style lang="scss" scoped>
    .information-container {
        background-color: white;
        padding: 18px;
        border-radius: 12px;
    }
    .send-sms-title {
      margin-top: 5px;
      text-align: center;
    }
    .info-input {
      margin-top: 20px;
      width: 90%;
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
      &:hover {
        transition: all .3s;
        background-color: #022F5E;
        color: white;

      }
    }
    .gender {
        h5 {
            font-size: 15px;
            align-self: flex-start;
        }
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        padding: 10px;
    }
    .go-back {
        text-align: left;
        cursor: pointer;
        align-items: flex-end;
    }
    .birth-date {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>