<script setup>
import { useStore } from 'vuex';

    const props = defineProps({
        food: Object,
        off: Number,
        modelValue: Boolean
    })

    const store = useStore()
    const addCart = (food) => {
        if (store.getters.targetUser.id) {
            store.commit('addCart', JSON.parse(JSON.stringify(food)))
        }else{
            store.commit('addToTempCart', JSON.parse(JSON.stringify(food)))
        }
        
    }
    const deleteFromCart = (id) => {
        if (store.getters.targetUser.id) {
            store.commit('deleteFromCart', id)
        }else{
            store.commit('deleteFromTempCart', id)
        }
        
    }

</script>

<template>
    <div :class="['card-container c-pointer', modelValue === true ? '' : '']">
        <div class="describe-image">
            <div class="off-percent flex-center digit">{{off}}% </div>
            <img :src="'../../src/'+food.img" alt="product-image" draggable="false" class="pro-img">
        </div>
        <div class="card-content">
            <h3 class="product-title">{{food.name}}</h3>
            <div class="price-add-container">
                <div class="price-container">
                    <h4 class="price digit">{{food.price}} تومان</h4>
                    <h4 class="off-price digit">{{(food.price)-(food.price*(off/100))}} تومان</h4>
                <p class="d-text">
                    {{food.describe}}
                </p>
                </div>

            </div>
        </div>
        <div class="cart-update‌">
            <div class="update">
                <p>مجموع </p>
                <div class="off-price digit">{{store.getters.tempCartItem(food.id) * food.price | 0}} تومان</div>
            </div>
            <div class="addcart-mojoodnist">
                <div class="minus-cart flex-center" v-if="store.getters.tempCartItem(food.id)">
                    <img class="icon c-pointer" @click.stop="deleteFromCart(food.id)" src="../assets/img/icons/minus.png" alt="add to cart">
                </div>
                <div class="food-count digit">{{store.getters.tempCartItem(food.id)}}</div>
                <div class="add-cart flex-center">
                    <img  class="icon c-pointer" @click.stop="addCart(food)" src="../assets/img/icons/plus.png" alt="add to cart">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .card-container {
        border-radius: 2px;
        position: absolute;
        width: 32.6%;
        background-color: white;

        & .off-percent {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #022F5E;
            color: white;
            font-size: 13px;
            left: 5px;
            border-radius: 3px;
        }

        & .card-content {
            padding: 15px;
            background-color: white;
            border-bottom: 1px solid #b8b8b8;
        }
        & .price {
            color: #888888;
            text-decoration: line-through;
        }

        transition: all .3s;
    }
    .price-add-container {
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    .icon {
        max-width: 24px;
        height: 24px;
        border: 1px solid #888888 ;
        border-radius: 50%;
        transition: all .4s;
        &:hover {
            background-color:  #888888;
            transition: all .4s;
        }
    }
    .describe-image{
        position: relative;
        height: 50vh;
    }
    .pro-img {
        width: 100%;
        height: 50vh;
    }
    .d-text {
        font-size: 12px;
        color: #888888;
        padding-top: 17px;
    }
    .addcart-mojoodnist {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        width: 80px;
    }
    .cart-update‌ {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .update {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        background-color: #022F5E;
        padding: 8px;
        color: white;
        border-radius: 5px;
        width: 150px;
    }

</style>