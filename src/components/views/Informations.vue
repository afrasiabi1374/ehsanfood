<script setup>
    import InputC from '../InputC.vue'
    import RadioC from '../RadioC.vue'
    import { onBeforeMount, reactive, ref, toRef } from 'vue';
    import DatePicker from 'vue3-persian-datetime-picker'
    import { useStore } from 'vuex';
    const store = useStore()
    const userInfo = reactive(store.getters.targetUser)
    onBeforeMount(()=>{
    })
    const info = reactive({
        fullName : ref(userInfo.fullName),
        phoneNumber : ref(userInfo.phoneNumber),
        email : ref(userInfo.email),
        birthDate : ref(userInfo.birthDate),
        gender : ref(userInfo.gender),
        id: ref(userInfo.id)
    })
    const saveInfo = (info) => {
        console.log('asas',info.id);
        store.commit('saveInfo', JSON.parse(JSON.stringify(info)))
    }
</script>
<template>
    <form class="info-container flex-center">
        <InputC    v-model="info.fullName"  class="info-input" inputLabel='نام و نام خانوادکی' inputWidth="220" inputType="text" />
        <InputC   v-model="info.phoneNumber"  class="info-input" inputLabel='شماره موبایل' inputWidth="220" inputType="text" />
        <InputC   v-model="info.email"  class="info-input" inputLabel='ایمیل' inputWidth="220" inputType="text" />
            <date-picker class="info-input" v-model="info.birthDate"></date-picker>
        <div class="gender">
            <h5>جنسیت:</h5>
            <RadioC  :checked = "info.gender === 'مرد'? true : false"  v-model="info.gender" inputLabel='مرد' name="gender" val="مرد" />
            <RadioC  :checked = "info.gender === 'زن'? true : false" v-model="info.gender" inputLabel='زن'  name="gender" val="زن" />
        </div>
        <div class="date-gender">

        </div>
        <!-- {{userInfo}} -->
        <button @click.prevent="saveInfo(info)" class="send-sms-btn flex-center c-pointer">ذخیره اطلاعات</button>
    </form>
</template>

<style lang="scss" scoped>
    .info-container {
        width: 600px;
        margin: auto;
        flex-wrap: wrap;
        margin-top: 15px;
        gap: 5px;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }
    .info-input {

        margin-top: 25px;
        width: 40%;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        
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