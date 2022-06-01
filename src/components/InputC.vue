<script setup>
    import { ref, onMounted, computed } from 'vue'
    const props = defineProps({
        inputLabel: String,
        inputWidth: String,
        inputType: String,
        modelValue: String
    })
      const emit = defineEmits(['update:modelValue'])

    const active = ref(false)
    const randID = ref('label'+Math.random())
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
    let  widthVar = props.inputWidth > 0 ? ref(props.inputWidth + 'px') : ref( 300 + 'px' )
    const logger = (e) => {
        emit('update:modelValue', e.target.value)
    }
    const computedModelValue = computed(()=> {
        return props.modelValue
    })
    
    // watch(computedModelValue, (newValue) => {
    //     console.log('popop',newValue);
    // },{immediate: true})

</script>
<template>
    <div class="input-box" @click.prevent="clickIn">
        <img src="../assets/img/icons/magnify.png" alt="magnify" class="search-icon">
        <label @click.stop="clickIn"  :class="['place-holder','c-pointer', props.modelValue || active ? 'active' : '']" for="search" :id="[randID]"> {{ inputLabel }} </label>
        <input  :type="props.inputType" @input="logger($event)" @click.stop="clickIn"  @blur.stop="clickOut"  class="search-input digit" type="text" :id="['input-'+randID]">
    </div>
</template>
<style lang="scss" scoped>
    .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 4px;
        border-radius: 10px;
        width: v-bind(widthVar);
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
            background-color: transparent;
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