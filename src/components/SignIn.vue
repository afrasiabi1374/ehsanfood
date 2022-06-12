<script setup>
    import { ref } from 'vue'
    import { useStore } from 'vuex';
    import InputC from './InputC.vue'
    import { useCookies } from "vue3-cookies";
    import { useRouter } from 'vue-router';
    const {cookies} = useCookies()
    const router   = useRouter()
    const props = defineProps({
        phoneNumber: String,
    })
    const emit = defineEmits([
        'update:levelNumber'
    ])
    const store = useStore()
    const allUsers = store.getters.allUsers
    const password = ref('')
    const sendPassword = async () => {
        let targetUser = await allUsers.find(user => (user.password == password.value && user.phoneNumber == props.phoneNumber))
        if (targetUser) {
            cookies.set('userCookie',props.phoneNumber, '10d')
            store.commit('setActiveUser', props.phoneNumber)
            store.getters.targetUser
             emit('closeModal', false)
             emit('update:levelNumber', 0)
            router.push('/profile/informations')
        }

    }
    const goback = () => {
        emit('update:levelNumber', 0)
    }

</script>
<template>
    <div class="sign-in-container flex-column-center" @click.stop>
        <small class="go-back pointer" @click="goback">برگشت</small>

        <h5 class="sign-in-title">
        رمز خود را وارد کنید
        </h5>
        <InputC   v-model="password"  class="pass-input" inputLabel='رمز عبور' inputType="password" />
        <div @click="sendPassword" class="send-sms-btn flex-center c-pointer">ورود</div>

    </div>
</template>
<style lang="scss" scoped>
    .sign-in-container {
        background-color: white;
        padding: 18px;
        border-radius: 12px;
        gap: 20px;
    }
    .pass-input {
      width: 90%;
    }
</style>