<script setup>
  import { computed } from '@vue/reactivity';
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  import InputC from './InputC.vue';
  import CardC from './CardC.vue';
  import ModalC from './ModalC.vue';
  import ModalFoodCardC from './ModalFoodCardC.vue';
  const store = useStore()
  const foods = computed(()=>{
    return store.getters.allFoods
  })
  const ModalForCard = ref(false)
  const modalFood = ref('')
  function addFooModal(food){
    modalFood.value = food
    ModalForCard.value = true
  }

  const valueForSearch = ref('')
  


</script>
<template>
  <div class="container w-full ">
    <div class="categories ">
      <template v-for="category in foods">
        <div class="category flex-column-center c-pointer">
          <img :src="'../../src/' + category.categoryImage" alt="category-image" class="img-cat" draggable="false" >
          <h4 class="cat-caption">{{category.category}}</h4>
        </div>
      </template>

    </div>
    <div class=" search-container">
      <InputC v-model="valueForSearch" inputLabel="جستجو" />
    </div>
    <div>
      <template v-for="(category, i) in foods" :key="i">
        <h3>{{category.category}}</h3>
        <div class="product-container">
          <template v-for="(food, index) in category.child" :key="index">
            <CardC @click="addFooModal(food)"  :name="food.name" :price="food.price" :describe="food.describe" :img="food.img" :count="food.count" :off="5"  />
          </template>
        </div>
      </template>
    </div>
    <ModalC v-model="ModalForCard">
        <ModalFoodCardC  v-model="ModalForCard" @click.stop v-if="ModalForCard"   :name="modalFood.name" :price="modalFood.price" :describe="modalFood.describe" :img="modalFood.img" :count="modalFood.count" :off="5"  />
    </ModalC>
  </div>
</template>


<style lang="scss" scoped>
  .container {
    margin-top: 20px;
  }
  .category {
  }
  .img-cat {
    widows: 40px;
    height: 40px;
  }
  .cat-caption {
    font-size: 10px;
    color: #333333;
    white-space: nowrap
  }
  .categories {
    display: flex;
    gap: 40px;
    padding: 15px 20px;
    overflow: auto hidden;
    border-bottom: 1px solid rgb(228, 228, 228);
  }
  .search-container {
    padding: 10px 15px;
    border-bottom: 1px dashed rgb(228, 228, 228);
    width: 300px;
  }
  .product-container {
    width: 99%;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1.1%;
  }

</style>