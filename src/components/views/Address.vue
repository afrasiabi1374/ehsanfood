<script setup>
    import { reactive, ref } from 'vue';
    import { useStore } from 'vuex';
    import InputC from '../InputC.vue'
    import ModalC from '../ModalC.vue';

    const addr = reactive({
        name: '',
        addressText: ''
    })
    const store = useStore()
    const saveAddress = (addr) => {
        store.commit('saveAddress',  JSON.parse(JSON.stringify(addr)))
    }
    const addressForShow = reactive(store.getters.addressForShow)
    const activeModal = ref(false)
    const deleteAddress = (id) => {
        store.commit('deleteAddress', id)
    }
    const addressEdit = (addr) => {
        store.commit('addressEdit', id)
    }

</script>
<template>
    <div class="address-container ">
        <div class="title-btn">
            <h3 class="address-title">لیست آدرس های من :</h3>
            <button class="send-address-btn flex-center " @click="activeModal = true">افزودن آدرس</button>
        </div>
        <template v-for="(item, i ) in addressForShow" :key="i">
            <div class="address-item" >
                <div class="address-detail">
                    <img src="../../assets/img/icons/location.png" alt="" class="location-icon">
                    <h4 class="address-name">{{item.name}}</h4>
                    <small class="address-text">{{item.addressText}}</small>
                    <small class="tell">
                        تلفن: ۰۹۱۲۶۳۶۵۸۰۸
                    </small>
                </div>
                <div class="address-operation">
                    <div class="edit c-pointer"  @click="deleteAddress(item.id)"><img src="../../assets/img/icons/delete.png" alt=""></div>
                    <div class="delete c-pointer"><img src="../../assets/img/icons/pencil.png" alt=""></div>
                </div>
            </div>

        </template>
    </div>
    <ModalC v-model="activeModal">
        <form class="add-container">
            <InputC   v-model="addr.name"  class="input-address-name " inputLabel='نام آدرس' inputWidth="20%" inputType="text" />
            <InputC   v-model="addr.addressText"   class="input-address" inputLabel='ورود آدرس' inputWidth="100%" inputType="text" />
            <button class="send-sms-btn flex-center c-pointer" @click.prevent="saveAddress(addr)">ذخیره آدرس</button>
        </form>
    </ModalC>
</template>
<style lang="scss" >
    .add-container {
        width: 36%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
        gap: 15px;
        position: absolute;
        top: 50%; right: 50%;
        transform: translate(50%,-50%);
        background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 20px;
    }
    .send-address-btn {
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

    .input-address-name {
        width: 30%;
    }
    .input-address {
        width: 80%;
    }
    .address-container{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding-top: 40px;
    }
    .address-title{
        font-weight: 50;
    }
    .address-detail {
        display: flex;
        flex-wrap: wrap;
        padding: 0px 5px 10px 80px;
        border-radius: 10px;
        font-weight: 200;
        align-items: center;
        width: 100%;
    
        .address-name::after {
            content: '|';
            padding: 0 4px;
        }   
        .address-text {
            color: #333333;
            word-wrap: break-word;
        }
    }

    .address-item {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        margin-top: 5px;
    }
    
    .address-item:not(:last-child) {
        border-bottom: 1px dashed rgb(213, 213, 245);
    }

    .title-btn {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 30px;
        justify-content: space-between;
    }
    .tell {
        width: 100%;
        color: #333333;
        padding-right: 40px;
    }
    .address-operation {
        display: flex;
        align-items: flex-end;
        padding-bottom: 10px;
        gap: 10px;
    }
    .location-icon {
    }
</style>