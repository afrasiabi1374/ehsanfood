<script setup>
    import { onMounted, ref } from 'vue';
    const active = ref(false)
    const randID = ref('label'+Math.random())
    const searchValue = ref('')
    const count = ref(1)
    onMounted(() => {
        document.body.addEventListener('click',()=>{
            active.value = false
        })
    })

    const clickIn = () =>  {
        active.value = true
        document.getElementById('input-'+randID.value).focus()
    }
    const clickOut = () =>  {
        active.value = false
    }

    
</script>
<template>
    <div class="input-box" @click.prevent="clickIn">
        <img src="../assets/img/icons/magnify.png" alt="magnify" class="search-icon">
        <label @click.stop="clickIn"  :class="['place-holder','c-pointer', searchValue || active ? 'active' : '']" for="search" :id="[randID]">جستجو</label>
        <input v-model="searchValue" @click.stop="clickIn"  @blur.stop="clickOut"  class="search-input" type="text" :id="['input-'+randID]">
    </div>
</template>
<style lang="scss" scoped>
    .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 4px;
        width: 300px;
        border-radius: 10px;
        .place-holder{
            font-size: 12px;
            position: absolute;
            right: 30px;
            background-color: white;
            transition: all .2s;
        }
        .search-input {
            outline: none;
            padding-top: 5px;
            border: none;
            width: 100%;
        }
    }
    .search-icon {
        width: 18px;
        height: 18px;
    }
    .active {
        font-size: 10px!important;
        transform: translateY(-20px);
        transition: all .2s;
    }
</style>