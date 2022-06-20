<script setup>
import { useStore } from 'vuex';

    const props = defineProps({
        food: Object,
        off: Number
    })
    const store = useStore()
    const addCart = (food) => {
        if (store.getters.targetUser.id) {
            store.commit('addCart', food)
        }else{
            store.commit('addToTempCart', food)
        }
        
    }
</script>

<template>
    <div class="card-container c-pointer">
        <div class="describe-image">
            <div class="off-percent flex-center digit">{{off}}%</div>
            <img :src="'../../src/'+food.img" alt="product-image" draggable="false" class="pro-img">
            <div class="describe flex-center">
                <p class="d-text">
                    {{food.describe}}
                </p>
            </div>
        </div>
        <div class="card-content">
            <h5 class="product-title">{{food.name}}</h5>
            <div class="price-add-container">
                <div class="price-container">
                    <h6 class="price digit">{{food.price}} تومان</h6>
                    <small class="off-price digit">{{(food.price)-(food.price*(off/100))}} تومان</small>

                </div>
                <div class="addcart-mojoodnist">
                    <div class="add-cart" >
                        <img @click.stop="addCart(food)" class="add-icon c-pointer"  src="../assets/img/icons/plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card-container {
        position: relative;
        width: 32.6%;
        border: 1px solid rgb(228, 228, 228);
        margin-top: 7px;
        &:hover {
            & .describe {
                opacity: 1;
                transition: all .3s;
            }
            & .d-text {
                transform: translateY(0px);
                transition: all .2s;
            }
        }
        & .off-percent {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #022F5E;
            color: white;
            font-size: 12px;
            top: 5px;
            left: 5px;
            border-radius: 3px;
        }
        & img.pro-img {
            width: 100%;
        }
        & .card-content {
            padding: 15px;
        }
        & .price {
            color: #888888;
            text-decoration: line-through;
        }
    }
    .price-add-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .add-icon {
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
    }
    .pro-img {
        height: 190px;
    }
    .describe {
        top: 0;
        position: absolute;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.856);
        height: 190px;
        width: 100%;
        font-size: 14px;
        opacity: 0;
        transition: all .4s;

    }
    .d-text {
        position: absolute;
        transform: translateY(20px);
        transition: all .2s;
    }
</style>