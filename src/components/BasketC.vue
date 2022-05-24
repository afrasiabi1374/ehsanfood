<template>
  <div class="container">
      <h3 class="cart-header">سبد خرید</h3>
      <div class="cart-items-container">
          <img class="empty-cart c-pointer" src="../assets/img/icons/sabad-kharid.png"  alt="cart-image" draggable="false">
      </div>
  </div>
</template>


<style lang="scss" scoped>
    .container {
        width: 27%;
        border :1px solid  rgb(228, 228, 228);
        float: left;
        .cart-header {
            padding-right: 15px;
            font-size: 13px;
            border-bottom: 1px solid  rgb(228, 228, 228);
            height: 46px;
            display: flex;
            align-items: center;
        }
        .cart-items-container{
            min-height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .empty-cart {
            display: block;
            height: 30%;
            width: 30%;
            margin: auto;
            
        }
    }
</style>