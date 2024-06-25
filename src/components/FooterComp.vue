<template>
    <v-footer class="custom-footer">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          class="mx-2"
          color="#715c9c"
          rounded="xl"
          variant="text"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Все права защищены</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          '+79123456789',
          'myrtille@mail.ru',
          'ул. Кирова 5',
          'ул. Макаренко 20',
          'ул. Енисейская 52Г',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .custom-footer {
  background-image: url('/src/assets/header.jpg');
  background-size: cover;
  background-position: 25% 66%;
  opacity: 0.9;
  }

  .text-center {
    margin-top: 4px;
    color: #715c9c;
  }
  </style>
  