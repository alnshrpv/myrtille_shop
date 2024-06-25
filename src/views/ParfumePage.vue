<template>
  <v-container class="container" fluid>
    <v-row>
      <v-col class="filter-col" cols="12" md="3">
        <v-card class="filter-card">
          <v-card-text>
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              v-model="search"
              label="Поиск товара"
              class="mb-4 search-field"
              variant="solo"
            ></v-text-field>
            <v-card-title>Категория товара</v-card-title>
            <v-checkbox
              v-model="selectedCategories"
              :value="1"
              label="Женские ароматы"
              class="mb-2 filter-checkbox"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              :value="2"
              label="Мужские ароматы"
              class="mb-2 filter-checkbox"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedCategories"
              :value="3"
              label="Нишевая парфюмерия"
              class="mb-2 filter-checkbox"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-row class="product-row">
          <v-col
            v-for="(product, index) in filteredProducts"
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
      </v-col>
    </v-row>
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
          id: 21,
          name: 'JUSBOX NIGHT FLOW EAU DE PARFUM',
          price: '1000',
          description: 'Парфюмерная вода',
          image: '/parf/1.jfif',
          category: 1,
          sku: '12345',
            stock: 10,
        },
        {
          id: 22,
          name: 'OBVIOUS UNE PISTACHE EAU DE PARFUM',
          price: '1000',
          description: 'Парфюмерная вода',
          image: '/parf/2.jpg',
          category: 1,
          sku: '12345',
            stock: 10,
        },
        {
          id: 23,
          name: 'FUGAZZI CASH FLOWER EXTRAIT DE PARFUM',
          price: '1000',
          description: 'Духи',
          image: '/parf/3.jpg',
          category: 1,
          sku: '12345',
            stock: 10,
        },
        {
          id: 24,
          name: 'ANTONIO BANDERAS THE ICON ELIXIR EAU DE PARFUM',
          price: '4000',
          description: 'Парфюмерная вода',
          image: '/parf/4.jfif',
          category: 2,
          sku: '12345',
            stock: 10,
        },
        {
          id: 25,
          name: 'GIVENCHY GENTLEMAN BOISEE EAU DE PARFUM',
          price: '1000',
          description: 'Парфюмерная вода',
          image: '/parf/5.jfif',
          category: 2,
          sku: '12345',
            stock: 10,
        },
        {
          id: 26,
          name: 'PACO RABANNE 1 MILLION EAU DE TOILETTE ',
          price: '2000',
          description: 'Туалетная вода',
          image: '/parf/6.jfif',
          category: 2,
          sku: '12345',
            stock: 10,
        },
        {
          id: 27,
          name: 'TIZIANA TERENZI ANDROMEDA EXTRAIT DE PARFUM ',
          price: '3000',
          description: 'Духи',
          image: '/parf/7.jpg',
          category: 3,
          sku: '12345',
            stock: 10,
        },
        {
          id: 28,
          name: 'V CANTO LEON EXTRAIT DE PARFUM ',
          price: '4000',
          description: 'Духи',
          image: '/parf/8.jfif',
          category: 3,
          sku: '12345',
            stock: 10,
        },
        {
          id: 29,
          name: 'PLACE DES LICES VANILE EAU DE PARFUM',
          price: '4000',
          description: 'Парфюмерная вода',
          image: '/parf/9.jfif',
          category: 3,
          sku: '12345',
            stock: 10,
        },
        {
          id: 30,
          name: 'MOLINARD THE BASILIC EAU DE PARFUM',
          price: '4000',
          description: 'Парфюмерная вода',
          image: '/parf/10.jfif',
          category: 3,
          sku: '12345',
            stock: 10,
        },
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

.span{
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
}

body {
  font-family: Montserrat;
}

.product-row {
  margin-left: 0; 
}

.product-col {
  padding: 35px; 
}

.card {
  height: 500px;
  width: 80%; 
  border-radius: 20px;
  border: 2px solid #937fbc; 
  transition: transform 0.3s ease; 
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

.filter-col {
  margin-right: 0; 
}

.filter-card {
  border: 2px solid #937fbc;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 24px; 
  height: 360px;
  margin-left: 100px;
}

.search-field {
  width: 100%;
  height: 50px;
  border-radius: 20px;
}

.filter-checkbox {
  display: block;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
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
</style>
