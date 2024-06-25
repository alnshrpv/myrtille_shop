<template>
    <v-container class="fav-container">
      <v-row justify="center">
        <v-card class="fav">
          <v-card-title class="headline">Избранное</v-card-title>
          <v-card-text>
            <v-list style="border-radius: 15px; width: 100%;">
              <v-list-item v-for="(item, index) in favoriteItems" :key="index" class="fav-item">
                <v-list-item-avatar class="fav-item-avatar">
                  <img :src="item.image" alt="Product Image" style="height: 125px;">
                </v-list-item-avatar>
                <div class="fav-item-details">
                  <v-list-item-content class="fav-item-content">
                    <v-list-item-title class="item-title">{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle class="item-subtitle">{{ item.description }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="fav-item-actions">
                    <v-btn style="height: 27px; width: 27px; margin-right: 10px" icon @click="removeItemFromFavorites(item)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn style="height: 27px; width: 27px; margin-left: 10px" icon @click="addItemToCart(item)">
                      <v-icon>mdi-cart-plus</v-icon>
                    </v-btn>
                    <div class="price">{{ item.price }} ₽</div>
                  </v-list-item-action>
                </div>
              </v-list-item>
            </v-list>
            <div class="text-right">
              <div>Количество товаров: {{ favoriteItemsCount }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'FavPage',
    computed: {
      ...mapGetters(['favoriteItems']),
      favoriteItemsCount() {
        return this.favoriteItems.length;
      }
    },
    methods: {
      ...mapActions(['addToCart', 'removeFromFavorites']),
      removeItemFromFavorites(item) {
        this.removeFromFavorites(item);
      },
      addItemToCart(item) {
        this.addToCart(item);
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Roboto, sans-serif;
  }
  
  .fav {
    margin-top: 12px;
    border: 2px solid #837bc4;
    border-radius: 20px;
  }
  
  .fav-item {
    border: 2px solid #837bc4;
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 255px;
  }
  
  .fav-item-avatar {
    flex-shrink: 0;
  }
  
  .fav-item-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .fav-item-actions {
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
  </style>
  