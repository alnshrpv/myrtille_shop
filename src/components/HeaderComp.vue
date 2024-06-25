<template>
  <div>
    <div class="logo-container">
      <router-link to="/">
        <img :src="logo" alt="Logo" class="logo">
      </router-link>
    </div>
    <v-app-bar class="header-bar" app elevation="0" style="position: absolute;">
      <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          v-model="search"
          label="Поиск по товарам"
          class="search-field"
          variant=""
        hide-details
        single-line
          @input="onSearch"
        ></v-text-field>
       <v-card v-if="searchResults.length > 0" class="search-results">
  <v-list>
    <v-list-item
      v-for="(product, index) in searchResults"
      :key="index"
      @click="goToProductDetail(product.id)"
    >
      <v-list-item-avatar class="product-avatar">
        <img :src="product.image" alt="Product Image" style="height: 30px;">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title style="font-size: 15px;">{{ product.name }}</v-list-item-title>
        <v-list-item-subtitle style="font-size: 15px;">{{ product.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
          </v-col>
        </v-row>
      <v-container class="header-container">
        <div class="icon-container">
          <div class="favorite-icon-wrapper">
            <router-link to="/favorites">
              <v-btn icon class="white-icon">
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <span v-if="favoriteItemsCount > 0" class="favorite-count">{{ favoriteItemsCount }}</span>
            </router-link>
          </div>
          <div class="cart-icon-wrapper">
            <v-btn icon @click.stop="toggleCartMenu" class="white-icon">
              <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
            <span v-if="cartItemsCount > 0" class="cart-count">{{ cartItemsCount }}</span>
          </div>
          <router-link v-if="user" to="/user-profile">
            <v-btn icon class="white-icon">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </router-link>
          <router-link v-else to="/login">
            <v-btn icon class="white-icon">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </router-link>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer location="right" v-model="drawer" temporary width="530" style="height: 100%; top: 0px; z-index: 1020;">
      <v-card>
        <v-card-title class="headline">Корзина</v-card-title>
        <v-card-text>
          <v-list style="border-radius: 15px; width: 100%;">
            <v-list-item v-for="(item, index) in cartItems" :key="index" class="cart-item">
              <v-list-item-avatar class="cart-item-avatar">
                <img :src="item.image" alt="Product Image" style="height: 125px;">
              </v-list-item-avatar>
              <div class="cart-item-details">
                <v-list-item-content class="cart-item-content">
                  <v-list-item-title class="item-title">{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle class="item-subtitle">{{ item.description }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="cart-item-actions">
                  <v-btn style="height: 27px; width: 27px; margin-right: 10px" icon @click="decreaseQuantity(item)" class="white-icon">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span class="quantity">{{ item.quantity }}</span>
                  <v-btn style="height: 27px; width: 27px; margin-left: 10px" icon @click="increaseQuantity(item)" class="white-icon">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <div class="price">{{ calculateItemTotal(item) }} ₽</div>
                </v-list-item-action>
              </div>
            </v-list-item>
          </v-list>
          <div class="text-right">
            <div>Количество товаров: {{ cartItemsCount }}</div>
            <div>Итоговая Сумма: {{ cartTotal }} ₽</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#715c9c" @click="placeOrder">Оформить заказ</v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar class="category-bar" app style="position: absolute;">
      <v-container>
        <v-row justify="center">
          <v-col cols="auto" class="nav-button">
            <v-menu open-on-hover activator="parent" offset-y class="nav-button" :location="location">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" style="font-size: 22px; color: #715c9c; width: 220px;  margin-top: 2px; margin-right: 0px;">
                  Категории товаров
                </v-btn>
              </template>
              <v-list class="nav-list">
                <router-link to="/hair">
                  <v-list-item class="nav-list-item">
                    <v-list-item-title>СРЕДСТВА ДЛЯ УХОДА ЗА ВОЛОСАМИ</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/parf">
                  <v-list-item class="nav-list-item">
                    <v-list-item-title>ПАРФЮМЕРИЯ</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/carecos">
                  <v-list-item class="nav-list-item">
                    <v-list-item-title>УХОДОВАЯ КОСМЕТИКА</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/deccos">
                  <v-list-item class="nav-list-item">
                    <v-list-item-title>ДЕКОРАТИВНАЯ КОСМЕТИКА</v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols="auto" class="nav-button">
            <router-link to="/discounts">
              <v-btn class="nav-btn">Скидки</v-btn>
            </router-link>
          </v-col>
          <v-col cols="auto" class="nav-button">
            <router-link to="/promotions">
              <v-btn class="nav-btn">Акции</v-btn>
            </router-link>
          </v-col>
          <v-col cols="auto" class="nav-button">
            <router-link to="/gift-cards">
              <v-btn class="nav-btn">Подарочные карты</v-btn>
            </router-link>
          </v-col>
          <v-col cols="auto" class="nav-button">
            <router-link to="/stores">
              <v-btn class="nav-btn">Магазины</v-btn>
            </router-link>
          </v-col>
        </v-row>
        
      </v-container>
    </v-app-bar>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'HeaderComp',
  data() {
    return {
      search: '',
      searchResults: [],
      logo: require('@/assets/logo.png'),
      drawer: false,
      showPopup: false,
      popupProduct: null,
      user: null,
      locations: ['top', 'bottom', 'start', 'end', 'center'],
      location: 'bottom',
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'favoriteItems', 'cartTotal', 'calculateItemTotal', 'searchProducts']),
    cartItemsCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    favoriteItemsCount() {
      return this.favoriteItems.length;
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
  onSearch() {
    console.log('Search query:', this.search);
    this.searchResults = this.searchProducts(this.search);
    console.log('Search results:', this.searchResults); 
  },
  goToProductDetail(id) {
    console.log('Navigating to product detail:', id);
    this.search = ''; 
    this.searchResults = [];
    this.$router.push({ name: 'ProductDetail', params: { id } }).catch(err => {
      if (err.name !== 'NavigationDuplicated') {
        throw err;
      }
    });
  },
  ...mapActions(['addToCart', 'removeFromCart', 'placeOrder', 'increaseQuantity', 'decreaseQuantity']),
  toggleCartMenu() {
    this.drawer = !this.drawer;
  },
  placeOrder() {
    this.$router.push({ name: 'Checkout' });
    this.drawer = false;
  }
}
};
</script>


<style scoped>


.search-results {
  margin-top: 60px;
  position: fixed;
  width: 30%;
  height: 300px;
  overflow-y: auto;
  z-index: 1050;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;

}
.search-field {
  z-index: 1020;
    position: fixed;
    width: 20%;
    height: 50%;
    background-color: white;
    border-radius: 50px;
    color: #715c9c;
}


@font-face {
  font-family: "Phenomena-Light";
  src: url("~@/font/Phenomena-Light.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.logo-container {
  text-align: center;
  padding: 20px 0;
  position: relative;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1020;
  width: 240px;
}

.header-bar {
  height: 110px;
  background-image: url('/src/assets/header.jpg');
  background-size: cover;
  background-position: 25% 42%;
  opacity: 0.9;
  position: static;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 34px;
  position: relative;
  right: 300px;
}

.favorite-icon-wrapper {
  position: relative;
}

.favorite-count {
  position: absolute;
  top: 0px;
  right: -1px;
  background-color: #eb9abb;
  color: white;
  border-radius: 50%;
  padding: 0px 5px;
  font-size: 11px;
}

.cart-icon-wrapper {
  position: relative;
}

.cart-count {
  position: absolute;
  top: 0px;
  right: -1px;
  background-color: #eb9abb;
  color: white;
  border-radius: 50%;
  padding: 0px 5px;
  font-size: 11px;
}

.logo {
  height: 103px;
}

.category-bar {
  margin-top: 46px;
  background-image: url('/src/assets/header.jpg');
  background-size: cover;
  opacity: 0.9;
  background-position: 25% 53%;
  font-family: "Phenomena-Light";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.nav-button {
  display: flex;
  justify-content: center;
  margin-right: 21px;
  font-size: 22px; 
  color:#715c9c; 
}

.nav-btn {
  font-size: 22px; 
  color: #715c9c;
}

a {
  text-decoration: none !important;
}

.nav-list {
  font-family: "Phenomena-Light";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #715c9c;
}

.nav-list-item {
  transition: background-color 0.3s;
  color: #715c9c;
  font-family: "Phenomena-Light";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  text-decoration: none;
}

.nav-list-item:hover {
  font-family: "Phenomena-Light";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  background-color: #f0f0f0; 
}

.v-navigation-drawer {
  z-index: 1000;
  width: 1000px;
}

.cart-item {
  border: 2px solid #837bc4;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 255px;
}

.cart-item-avatar {
  flex-shrink: 0;
}

.cart-item-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cart-item-actions {
  top: 10px;
  position: relative;
  margin-bottom: 20px;
}

.price {
  margin-left: 300px;
  font-size: 16px;
}

.item-title {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 400px;
}

.white-icon {
  color: #715c9c;
}
</style>
