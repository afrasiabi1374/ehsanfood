<script setup>
  import { computed } from '@vue/reactivity';
  import { useStore } from 'vuex';
  import { onMounted, ref } from 'vue';
  import InputC from './InputC.vue';
  import CardC from './CardC.vue';
  import ModalC from './ModalC.vue';
  import ModalFoodCardC from './ModalFoodCardC.vue';
  import { onBeforeRouteLeave } from 'vue-router';
  const store = useStore()
  const valueForSearch = ref('')
  let catsStore = ref(store.getters.allFoods)
  const cats = computed(()=>{
      return catsStore.value
  })

  const foods = computed(()=>{
    if (valueForSearch.value != '') {
      return store.getters.ghaza.filter(item => item.name.includes(valueForSearch.value))
    }
    return store.getters.ghaza
  })

  const ModalForCard = ref(false)
  const modalFood = ref('')
  function addFooModal(food){
    modalFood.value = food
    ModalForCard.value = true
  }


  onMounted(()=>{
    history.scrollRestoration = 'manual';

            if (ModalForCard.value == false) {
                document.body.style.overflow = 'scroll'
            }
    const categoryBox = document.getElementById('categy-Box')
    const sticky = ref(categoryBox?.getBoundingClientRect().top)
    const catTitle = ref(document?.querySelectorAll('.cat-title'))
    const proContainer = ref(document.querySelectorAll('.product-container'))
    const catLink = ref(document.querySelectorAll('#cat-link'))
    const stickyCat = () => {
      if(window.pageYOffset < sticky.value){
        document?.querySelector('#basket-wrapper')?.classList?.remove('fixed')
      }
      if (window.pageYOffset >= sticky.value) {
        categoryBox.classList.add("sticky")
        document.querySelector('#basket-wrapper')?.classList?.add('fixed')
          // console.log(catTitle.value);
          catTitle.value.forEach((item, catTitleIndex) => {
            if ((proContainer.value[catTitleIndex].getBoundingClientRect().top-70 <= categoryBox.getBoundingClientRect().bottom) && proContainer.value[catTitleIndex].getBoundingClientRect().bottom - categoryBox.getBoundingClientRect().bottom >= 0) {
              // console.log(proContainer.value[catTitleIndex].getBoundingClientRect().bottom - categoryBox.getBoundingClientRect().bottom);

              catLink.value.forEach(i=>{


                if ('#'+item.id == i.href.substring(i.href.indexOf('#'))) {
                  i.classList.add("classSpy")
                   
                } else {

                  i.classList.remove("classSpy")
                  
                }


              })
              // console.log(item, item.getBoundingClientRect().top);
              

            }

          })

        
      }else{
        categoryBox?.classList.remove("sticky")
        document?.querySelector('#cat-link')?.classList?.remove("classSpy")
        
      }


      
    }


    window.addEventListener('scroll', ()=>{
      stickyCat()
    })

  })
  onBeforeRouteLeave(()=>{
    window.removeEventListener('scroll', ()=>{
      stickyCat()
    })

  })
</script>
<template>
  <div  class="order-container w-full ">
    <div id="categy-Box" class="categories">
      <template v-for="(category, i) in cats" :key="i">
        <a :href="'#'+category.categoryId" id="cat-link" class="category flex-column-center c-pointer">
          <img :src="'../../src/' + category.categoryImage" alt="category-image" class="img-cat" draggable="false" >
          <h3 class="cat-caption" >{{category.category}}</h3>
        </a>
      </template>

    </div>
    <div class=" search-container">
      <div class="search-box-container">
        <InputC  v-model="valueForSearch" inputLabel="جستجو" />
      </div>
    </div>
    <div>
      <template v-for="(category, i) in cats" :key="i">
        <h3 :id="category.categoryId" class="cat-title">{{category.category}}</h3>
        <div class="product-container">
          <template  v-for="(food, index) in foods" :key="index">
            <CardC  v-if="food.catId == category.id"  @click="addFooModal(food)"  :food="food" :off="5"  />
          </template>
        </div>
      </template>
    </div>
        <ModalC   v-model="ModalForCard">
          <TransitionGroup  name="smaller"  key="modalCard">
            <ModalFoodCardC v-if="ModalForCard"  v-model="ModalForCard" @click.stop    :food="modalFood" :off="5"  />
          </TransitionGroup>
        </ModalC>
  </div>
</template>


<style lang="scss" scoped>
  .order-container {
    margin-top: 20px;
    width: 100%;
  }

  .img-cat {
    widows: 40px;
    height: 40px;
  }
  .cat-caption {
    font-size: 10px;
    color: #333333;
    white-space: nowrap;
    font-size: 13px;
    text-decoration: none;
    font-weight: bolder;
  }
  .categories {
    display: flex;
    gap: 40px;
    padding: 15px 20px;
    overflow: auto hidden;
    border-bottom: 1px solid rgb(228, 228, 228);
  }
  .categories::-webkit-scrollbar {
    height: 4px;
  }
  .search-container {
    padding: 10px 15px;
    border-bottom: 1px dashed rgb(228, 228, 228);
    width: 100%;
    .search-box-container {
      width: 300px;
    }
  }
  .product-container {
    width: 99%;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

/* Page content */

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: sticky!important;
  top: 0!important;
  background-color: white;
  z-index: 5;
  width: 100%;
}
.category {
  text-decoration: none;
}

.classSpy {
  border-bottom: 3px solid black;
  gap: 4px;
  .h3 {
    font-weight: bolder;
  }
}
.cat-title {
  padding-top: 100px;
  padding-bottom: 30px;
  padding-right: 18px;
}
.smaller-enter-active {
  transform: scale(1);
  opacity: 1;
  transition: all .3s ease-out;

}

.smaller-leave-active {
  transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.smaller-enter-from,
.smaller-leave-to {
  transform: scale(2);
  opacity: 0;
}
</style>