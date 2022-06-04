<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import InformationsC from '../InformationsC.vue';
import PhoneNumberC from '../PhoneNumberC.vue';
import ModalC from '../ModalC.vue';
const mobileModal = ref(false)
let phoneNumber = ref('')
const openModal = () => {
  mobileModal.value = true
}
let activeComponent = ref(PhoneNumberC);
let levelNumber = ref(0)
const computedActiveComponent = computed(()=> {
    
  if (levelNumber.value === 0) {
    activeComponent.value = PhoneNumberC
  }else if(levelNumber.value === 1){
    activeComponent.value = InformationsC
  }
  return activeComponent.value
})
</script>
<template>
  <div class="container  w-full">
    <div class="nav flex-space-between  m-auto">
      <img src="../../assets/img/logo.jpg" alt="لوگو" class="logo" draggable="false">
      <div class="sign-lang flex-center">
        <div class="sign btn ml-1 flex-center" @click="openModal">
          <img src="../../assets/img/icons/account.svg"  class="ml-1" alt="account" >
          ورود / عضویت
        </div>
        <div class="lang btn">
          En
        </div>
      </div>
    </div>
    <div class="top-banner w-full">
      <div class="banner-text m-auto">
        <div class="header-persent">
          <h1 class="describe-banner text-white">رستوران محسن</h1>
          <span class="persent bg-blue text-white">
            تخفیف تا٪۵
          </span>
        </div>
        <p class="address text-white">
          آدرس: پاسداران، خیابان گل نبی، خیابان ناطق نوری (زمرد)، کوچه همایون، پلاک2
        </p>
        <div class="online text-white" >
          <small >سفارش میپذیریم
          </small>
        </div>
      </div>
    </div>
  </div>
    <ModalC v-model="mobileModal">
      <TransitionGroup  name="smaller" >
        <form @submit.prevent v-if="mobileModal">
          <KeepAlive>
            <component  :is="computedActiveComponent" v-model:levelNumber="levelNumber" v-model:phoneNumber="phoneNumber" />
          </KeepAlive>
        </form>
      </TransitionGroup> 
    </ModalC>
</template>

<style lang="scss" scoped>
  .container {
    background-color: #ffffff;
  }
  .nav {
    width: 90%;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  .sign, .lang {
    font-size: 13px;
  }
  .top-banner {
    background-image: url('../../assets/img/banner-image.jpg');
    background-color: rgb(255, 255, 255);
    min-height: 300px;
    max-height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% center;
    background-position-x: 50%;
    background-position-y: center;
    background-blend-mode: overlay;
    background-color: #00000093;
    position: relative;
  }
  .banner-text {
    width: 90%;
    height: 100%;
    padding-top: 10px;
    position: relative;
  }
  .describe-banner{
    padding-top: 15px;
  }
  .header-persent {
    display: flex;
    align-items: center;
  }
  .persent {
    border-radius: 5px;
    font-size: 13px;
    padding: 5px;
    cursor: pointer;
  }
  .online {
    position: absolute;
    top: 250px;
    display: flex;
    align-items: center;
    &::before {
    min-height: 15px;
    min-width: 15px;
    content: " ";
    background-color: rgba(33, 198, 80, 0.603);
    border-radius: 50%;
    display: inline-block;
    margin-left: 2px;
    }
  }
  .mobile-container{ 
    height: 200px;
    background: rgb(255, 255, 255);
    padding: 18px;
    border-radius: 12px;

  }
.smaller-enter-active {
  transform: scale(1);
  transition: all .2s ease-out;

}

.smaller-leave-active {
  transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.smaller-enter-from,
.smaller-leave-to {
  transform: scale(.6);
}
</style>