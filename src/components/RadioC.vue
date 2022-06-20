<script setup>
    const props = defineProps([
        'inputLabel',
        'name',
        'modelValue',
        'val'
    ])
</script>
<template>
    <label class="radio-container">
        <input @input="$emit('update:modelValue', $event.target.value)" type="radio" v-bind="$attrs" :name="name" :value="val"/>
        <span>{{inputLabel}}</span>
    </label>
</template>
<style lang="scss" scoped>
    input[type="radio"]{
        display: none;
    }

    label {
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        margin-bottom: 10px;

    }

    label span {
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        padding: 5px 5px 5px 10px;
        border-radius: 31px;
        transition: .25 ease;
        width: 80px;
    }

    label span:hover,
    input[type=radio]:checked + span {
        background-color: #d6d6e5;
    }

    label span::before {
        content: "";
        background-color: #fff;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 3px;
        transition: .3s;
        box-shadow: inset 10 0 0 2px #00005c;
    }

    input[type=radio]:checked + span::before {
        box-shadow: inset 0 0 0 6px #00005c;
    }
</style>