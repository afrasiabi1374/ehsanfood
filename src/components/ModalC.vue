<script setup>
import { onMounted, ref } from 'vue';

    const props = defineProps({
        modelValue: Boolean,
    })
    const emit = defineEmits(['update:modelValue','modalClosed'])
    onMounted(()=>{


        document.body.addEventListener('click',()=>{
            if (props.modelValue === true) {
                document.body.style.overflow = 'hidden'
            }
        })


        let maskEl = ref(document.querySelectorAll('.mask'))


        maskEl.value.forEach(el => el.addEventListener('click', () => {
            if (props.modelValue === false) {
                document.body.style.overflow = 'scroll'
            }
        }))


    })

    const closeModal = () => {
        emit('update:modelValue', false)
        emit('modalClosed')
    }
</script>
<template>
    <div :class="['mask flex-center', modelValue === true ? 'mask-active' : 'mask-off']" @click="closeModal" >
        <slot ></slot>
    </div>
</template>
<style lang="scss" scoped>
    .mask {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.664);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }
    .mask-active {
        visibility: visible;
        opacity: 1;
        transition: all .5s;
    }
    .mask-off {
        visibility: hidden;
        opacity: 0;
        transition: all .5s;

    }

</style>