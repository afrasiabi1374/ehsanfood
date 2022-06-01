<script setup>
import { ref } from 'vue';
import InputC from './InputC.vue';
import RadioC from './RadioC.vue'; 
const emit = defineEmits(['nextLevel'])
const props = defineProps({
    phoneNumber: Number,
    levelNumber: Number
})
const fullName = ref('')
const password = ref('')
const email = ref('')
const goback = () => {
    emit('update:levelNumber', 0)
}
</script>

<template>
    <div class="information-container flex-column-center" @click.stop>
        <small class="go-back" @click="goback">برگشت</small>
        <h5 class="send-sms-title">
            اطلاعات تکمیلی (ضروری)
        </h5>
        <InputC   v-model="fullName"  class="send-sms-input" inputLabel='نام و نام خانوادکی' inputWidth="300" inputType="text" />
        <InputC   v-model="password"  class="send-sms-input" inputLabel='رمز عبور' inputWidth="300" inputType="text" />
        <InputC   v-model="email"  class="send-sms-input" inputLabel='ایمیل' inputWidth="300" inputType="text" />
        <div class="gender">
            <h5>جنسیت:</h5>
            <RadioC  v-model="gender" inputLabel='مرد' name="gender" val="مرد" />
            <RadioC  v-model="gender" inputLabel='زن'  name="gender" val="زن" />
        </div>
        <div class="send-sms-btn flex-center c-pointer" @click="sendPhoneNumber">ذخیره اطلاعات</div>
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
    .send-sms-input {
      margin-top: 20px;
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
</style>