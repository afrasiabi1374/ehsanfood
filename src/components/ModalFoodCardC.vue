<script setup>
    const props = defineProps({
        name: String,
        describe: String,
        img: String,
        count: Number,
        price: Number,
        off: Number,
        modelValue: Boolean
    })
</script>

<template>
    <div :class="['card-container c-pointer', modelValue === true ? 'active' : '']">
        <div class="describe-image">
            <div class="off-percent flex-center digit">{{off}}% </div>
            <img :src="'../../src/'+img" alt="product-image" draggable="false" class="pro-img">
        </div>
        <div class="card-content">
            <h3 class="product-title">{{name}}</h3>
            <div class="price-add-container">
                <div class="price-container">
                    <h4 class="price digit">{{price}} تومان</h4>
                    <h4 class="off-price digit">{{(price)-(price*(off/100))}} تومان</h4>
                <p class="d-text">
                    {{describe}}
                </p>
                </div>

            </div>
        </div>
        <div class="cart-update‌">
            <div class="update">
                <p>بروزرسانی</p>
                <div class="off-price digit">{{price}} تومان</div>
            </div>
            <div class="addcart-mojoodnist">
                <div class="add-cart">
                    <img class="icon c-pointer" @click.stop="true" src="../assets/img/icons/plus.png" alt="add to cart">
                </div>
                <div class="minus-cart">
                    <img class="icon c-pointer" @click.stop="true" src="../assets/img/icons/minus.png" alt="add to cart">
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
        margin-top: 7px;
        transform: translateY(-30px);
        background-color: white;

        & .off-percent {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #022F5E;
            color: white;
            font-size: 13px;
            top: 5px;
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
        height: 70px;
        display: flex;
        align-items: center;
        width: 80px;
        justify-content: space-between;
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
    .active {
        animation-name: anime;
        animation-duration: .3s;
        animation-fill-mode: forwards;
    }
    @keyframes anime {

        0% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
        
    }




</style>