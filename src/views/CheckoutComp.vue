<template>
  <v-container class="cart-container">
    <v-row justify="center">
      <v-card class="cart">
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
                  <v-btn style="height: 27px; width: 27px; margin-right: 10px" icon @click="decreaseQuantity(item)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span class="quantity">{{ item.quantity }}</span>
                  <v-btn style="height: 27px; width: 27px; margin-left: 10px" icon @click="increaseQuantity(item)">
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
      </v-card>
      <v-col cols="12" sm="8" md="6">
        <v-card class="oform">
          <v-card-title class="headline">Оформление заказа</v-card-title>
          <v-card-title class="headline">Выберите адрес магазина для самовывоза</v-card-title>
          <v-card-text>
            <v-form>
              <v-radio-group v-model="selectedStore" row>
                <v-radio
                  v-for="(store, index) in storeAddresses"
                  :key="index"
                  :label="store.name"
                  :value="store.address"
                ></v-radio>
              </v-radio-group>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#837bc4" @click="placeOrder">Оформить</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedStore: '',
      storeAddresses: [
        { name: 'г. Братск, улица Кирова 5', address: 'г. Братск, улица Кирова 5' },
        { name: 'г. Братск, улица Макаренко 20', address: 'г. Братск, улица Макаренко 20' },
        { name: 'г. Братск, улица Енисейская 52Г', address: 'г. Братск, улица Енисейская 52Г' }
      ]
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartItemsCount']),
    cartItemsCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    increaseQuantity(item) {
      this.addToCart(item);
    },
    decreaseQuantity(item) {
      this.removeFromCart(item);
    },

    calculateItemTotal(item) {
      return item.price * item.quantity;
    },
    placeOrder() {
      if (!this.selectedStore) {
        alert('Пожалуйста, выберите магазин');
        return;
      }
      this.$store.dispatch('clearCart');
      this.$router.push('/thank-you');
    }
  }
};
</script>

<style scoped>
body {
  font-family: Roboto, sans-serif;
}

.cart {
  margin-top: 12px;
  border: 2px solid #837bc4;
  border-radius: 20px;
}

.oform {
  border: 2px solid #837bc4;
  border-radius: 20px;
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
</style>
