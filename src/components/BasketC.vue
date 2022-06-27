<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

    const store = useStore()
    const activeUser = store.getters.targetUser
    const cartValues  =  computed(()=>{
        if (activeUser.id) {
            return store.getters.userCart
        } else {
            return store.getters.tempCartShow
        }

    })

 

    let totalCount = computed(() => {
        let countAll = cartValues.value?.reduce((prev, next) => prev + next.foodCount,0)
        return countAll || ''
    })

    const addCart = (food) => {
        if (store.getters.targetUser?.id) {
            store.commit('addCart', JSON.parse(JSON.stringify(food)))
        }else{
            store.commit('addToTempCart', JSON.parse(JSON.stringify(food)))
        }
        
    }
    const deleteFromCart = (id) => {
        if (store.getters.targetUser?.id) {
            store.commit('deleteFromCart', id)
        }else{
            store.commit('deleteFromTempCart', id)
        }
        
    }

    const emptyCart = () => {
        store.commit('emptyCart')
    }

       const momayez = computed(() => {
        const num = store.getters.getTotal.toString()
        if (num.length) {
            var parts = num.toString().split(".");
            const numberPart = parts[0];
            const decimalPart = parts[1];
            const thousands = /\B(?=(\d{3})+(?!\d))/g;
            return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
        }


    })
</script>
<template>
  <div class="basket-container" id="basket-wrapper">
      <div class="cart-header " > <span class="digit" v-if="cartValues !== undefined"> سبد خرید({{totalCount}})</span> <img v-if="cartValues !== undefined" @click="emptyCart"  class="c-pointer" src="../assets/img/icons/delete.png" alt=""></div>
      <div class="cart-items-container" >
         <img  v-if="!cartValues[0]" class="empty-cart c-pointer" src="../assets/img/icons/sabad-kharid.png"  alt="cart-image" draggable="false">
         <ul  v-if="cartValues !== undefined" class="food-list">
            <template v-for="(food, i) in cartValues" :key="i">
                <li class="food-list-item" v-if="store.getters.showCartItem(food.foodId)?.name">
                    <div class="title-price">
                        <h5>{{store.getters.showCartItem(food.foodId)?.name}}</h5>
                        <h5>{{store.getters.showCartItem(food.foodId)?.price.toLocaleString('fa-IR')}}</h5>
                    </div>
                    <div class="addcart-mojoodnist">
                        <div class="add-cart" v-if="store.getters.tempCartItem(food.foodId)">
                            <img @click.stop="deleteFromCart(food.foodId)" class="operation-icon  c-pointer"  src="../assets/img/icons/minus.png" alt="add to cart">
                        </div>
                        <div class="foodCount  digit">
                            {{store.getters.tempCartItem(food.foodId)}}
                        </div>
                        <div class="add-cart" >
                            <img @click.stop="addCart(store.getters.showCartItem(food.foodId))" class="operation-icon c-pointer"  src="../assets/img/icons/plus.png" alt="add to cart">
                        </div>
                    </div>
                </li>
            </template>

         </ul>

      </div>
      <div class="total-price"  v-if="cartValues[0]">
            <h4>قیمت کل :</h4>
            <h4 class="digit">{{momayez}} تومان</h4>
      </div>
      <div v-if="cartValues[0]" class="btn flex-center">تکمیل سفارش</div>
  </div>
</template>


<style lang="scss" scoped>
    .basket-container {
        width: 27%;
        border :1px solid  rgb(228, 228, 228);
        float: left;
        padding-bottom: 10px;
        
        .cart-header {
            padding-right: 15px;
            font-size: 13px;
            border-bottom: 1px solid  rgb(228, 228, 228);
            height: 46px;
            display: flex;
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: 15px;
        }
        .cart-items-container{
            max-height: 300px;
            min-height: 200px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            overflow: scroll;
        }
        .empty-cart {
            display: block;
            height: 30%;
            width: 30%;
            margin: auto;
            
        }
    }
    .food-list {
        align-self: flex-start;
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        font-weight: 300;
        .food-list-item{
            width: 100%;
            display: flex;
            border: 1px solid rgb(228, 228, 228);
            justify-content: space-between;
            align-items: center;
            border-right: none;
            border-left: none;
            padding: 10px;
            &:nth-child(odd){
                border-top: none;
                border-bottom: none;
            }
            .title-price {
                display: flex;
                flex-direction: column;
                .title {

                }
            }
            .count {

            }
        }
    }
    .addcart-mojoodnist{
        display: flex;
        justify-content: space-between;
        width: 27%;

    }
        .operation-icon {
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
    .add-cart {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .total-price {
        color: #022F5E; 
    }
    .total-price {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    .btn {
      width: 90%;
      text-align: center;
      height: 40px;
      transition: all .3s;
      border: 1px solid #022F5E;
      color: #022F5E;
      border-radius: 10px;
      margin-top: 20px;
      font-size: 13px;
      margin: auto;
      &:hover {
        transition: all .3s;
        background-color: #022F5E;
        color: white;

      }
    }    
.fixed {
  position: fixed!important;
  top: 0!important;
  left: 2%;
  width: 25.9%;
}
</style>