<script setup>
    const props = defineProps({
        modelValue: Boolean,
    })
</script>
<template>
    <div :class="['mask flex-center', modelValue === true ? 'mask-active' : 'mask-off']" @click="$emit('update:modelValue', modelValue=false)" >
        <slot></slot>
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