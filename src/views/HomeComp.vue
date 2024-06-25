<template>
  <v-container class="container" fluid>
    <v-col cols="12" md="9">
      <div v-for="category in categories" :key="category.id">
        <v-row class="category-row">
          <v-col cols="6">
            <h2 class="category-title">{{ category.name }}</h2>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn @click="goToCategory(category.id)" class="view-all-btn">Смотреть все</v-btn>
          </v-col>
        </v-row>
        <v-row class="product-row">
          <v-col
            v-for="(product, index) in filteredProductsByCategory(category.id)"
            :key="index"
            class="product-col"
            cols="12" sm="6" md="4"
          >
            <v-card class="card" @click="goToProductDetail(product.id)">
              <v-img :src="product.image" style="height: 300px;"></v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle class="price">{{ product.price }} ₽</v-card-subtitle>
              <v-card-text class="op">{{ product.description }}</v-card-text>
              <v-card-actions class="card-actions">
                <v-btn class="button" @click.stop="addProductToCart(product)">Добавить в корзину</v-btn>
                <v-btn icon @click.stop="toggleFavorite(product)" class="button-fav">
                  <v-icon>{{ isFavorite(product) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>

    <v-snackbar v-model="showPopup" color="white" timeout="3000">
      <v-img :src="popupProduct?.image" style="height: 84px; width: 50px;"></v-img>
      <span class="span">Добавлено в корзину: <br> "{{ popupProduct?.name }}"</span>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '',
      selectedCategories: [],
      showPopup: false,
      popupProduct: null,
      products: [
        {
          id: 1,
          name: 'MIXIT RE:START KERATIN BOMB SHAMPOO',
          price: '1000',
          description: 'Восстанавливающий шампунь',
          image: '/hair/1.jpg',
          category: 1
        },
        {
          id: 2,
          name: 'CONCEPT METAL DETOX SHAMPOO',
          price: '1000',
          description: 'Хелатный шампунь для волос',
          image: '/hair/2.jpg',
          category: 1
        },
        {
          id: 3,
          name: 'PHYTO PURPLE NO YELLOW SHAMPOO',
          price: '1000',
          description: 'Шампунь против желтизны',
          image: '/hair/3.jpg',
          category: 1,
          sku: '12346',
          stock: 5
        },
        {
          id: 21,
          name: 'JUSBOX NIGHT FLOW EAU DE PARFUM',
          price: '1000',
          description: 'Парфюмерная вода',
          image: '/parf/1.jfif',
          category: 2,
          sku: '12345',
          stock: 10,
        },
        {
          id: 22,
          name: 'OBVIOUS UNE PISTACHE EAU DE PARFUM',
          price: '1000',
          description: 'Парфюмерная вода',
          image: '/parf/2.jpg',
          category: 2,
          sku: '12345',
          stock: 10,
        },
        {
          id: 23,
          name: 'FUGAZZI CASH FLOWER EXTRAIT DE PARFUM',
          price: '1000',
          description: 'Духи',
          image: '/parf/3.jpg',
          category: 2,
          sku: '12345',
          stock: 10,
        },
        {
          id: 31,
          name: 'ERBORIAN CENTELLA CARE ',
          price: '1000',
          description: 'Флюид против несовершенств',
          image: '/care/1.jpg',
          category: 3,
          sku: '12345',
          stock: 10,
        },
        {
          id: 32,
          name: 'MIXIT YOUR SKIN DEEP CLEANSING OIL ',
          price: '1000',
          description: 'Гидрофильное масло',
          image: '/care/2.jpg',
          category: 3,
          sku: '12345',
          stock: 10,
        },
        {
          id: 33,
          name: 'PAYOT №2 BAUME AROMATIQUE APASANT ',
          price: '1000',
          description: 'Успокаивающий крем-бальзам',
          image: '/care/3.jpg',
          category: 3,
          sku: '12345',
          stock: 10,
        },
      ],
      categories: [
        { id: 1, name: 'Уход за волосами', route: '/hair' },
        { id: 2, name: 'Парфюм', route: '/parf' },
        { id: 3, name: 'Уходовая косметика', route: '/carecos' }
      ]
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'calculateItemTotal', 'favoriteItems']), 
    filteredProducts() {
      let filtered = this.products;

      if (this.search) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      if (this.selectedCategories.length) {
        filtered = filtered.filter(product =>
          this.selectedCategories.includes(product.category)
        );
      }

      return filtered;
    }
  },
  methods: {
    ...mapActions(['addToCart', 'addToFavorites', 'removeFromFavorites']),
    addProductToCart(product) {
      this.addToCart(product);
      this.showPopupMessage(product);
    },
    toggleFavorite(product) {
      if (this.isFavorite(product)) {
        this.removeFromFavorites(product);
      } else {
        this.addToFavorites(product);
      }
    },
    isFavorite(product) {
      return this.favoriteItems.some(item => item.id === product.id);
    },
    goToProductDetail(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    goToCategory(categoryId) {
    let routeName;
    if (categoryId === 1) {
      routeName = 'Hair';
    } else if (categoryId === 2) {
      routeName = 'Parf';
    } else if (categoryId === 3) {
      routeName = 'CareCos';
    }
    this.$router.push({ name: routeName });
  },
    filteredProductsByCategory(categoryId) {
      return this.filteredProducts.filter(product => product.category === categoryId);
    },
    showPopupMessage(product) {
      this.popupProduct = product;
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.button-fav {
  margin-left: 17px;
  background-color: #937fbc;
  color: white;
  height: 35px;
  width: 35px;
}

.span {
  color: #937fbc;
  margin-left: 62px;
  top: 25px;
  position: fixed;
}

.op {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  font-family: Montserrat;
}

.carousel {
  max-width: 66%;
  margin: 0 auto; 
  border-radius: 15px;
}

.product-row {
  justify-content: center;
  display: flex; 
  flex-wrap: wrap; 
}

.product-col {
  display: flex;
  justify-content: center;
  margin-bottom: 35px; 
}

.card {
  width: 100%; 
  max-width: 300px; 
  border-radius: 20px;
  border: 2px solid #937fbc; 
  transition: transform 0.3s ease; 
}

.product-image {
  height: 300px;
}

.card:hover {
  transform: scale(1.05); 
}

.card-actions {
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
}

.button {
  background-color: #937fbc;
  color: white;
}

.price {
  font-size: 20px; 
  font-weight: bold; 
  text-align: center; 
  margin-top: 10px; 
}

.v-snackbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  color: #937fbc;
  opacity: 0.9;
}

.view-all-btn {
  background-color: #937fbc;
  color: white;
}
</style>
