<script setup>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import InputC from './InputC.vue';
const store = useStore()
const allUsers = store.getters.allUsers
const emit = defineEmits([
  'update:phoneNumber',
  'update:levelNumber'
])
const props = defineProps({
  levelNumber: Number,
  phoneNumber: String
})
const changeNumber = (n) => {
  emit('update:phoneNumber', n)
}

const sendPhoneNumber = () => {
  let userPass = allUsers.find(element => element.phoneNumber === props.phoneNumber)?.password
  if (userPass) {
    emit('update:levelNumber', 2)
  }else if(!userPass) {
    emit('update:levelNumber', 1)
  }
}

  onMounted(()=>{
    document.body.addEventListener('click', ()=> {
      emit('update:levelNumber', 0)
      
    })
  })

</script>
<template>
  <div  class="mobile-container flex-column-center" @click.stop>
    <h5 class="send-sms-title">
      شماره موبایل خود را وارد کنید
    </h5>
    <InputC  @update:modelValue="changeNumber"  v-model="phoneNumber"  class=" send-sms-input" inputLabel='نمونه (۰۹۱۲xxxxxxx)' inputWidth="300" inputType="text" />
    <div class="send-sms-btn flex-center c-pointer" @click="sendPhoneNumber($event)">ارسال تلفن</div>
  </div>
</template>
<style lang="scss" scoped>
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
      &:hover {
        transition: all .3s;
        background-color: #022F5E;
        color: white;

      }
    }
</style>