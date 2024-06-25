<template>
    <v-container class="thank-you-container">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="thank-you-card">
            <v-card-title class="headline">Спасибо за покупку!</v-card-title>
            <v-card-text>
              Мы свяжемся с вами в ближайшее время для уточнения деталей заказа.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="goBack">Обратно за покупками</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .thank-you-container {
    margin-top: 50px;
  }
  
  .thank-you-card {
    border: 2px solid #837bc4;
    border-radius: 20px;
    text-align: center;
  }
  </style>
  