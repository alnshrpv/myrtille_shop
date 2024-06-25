<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="card">
          <v-card-title>
            <span class="headline">Профиль пользователя</span>
          </v-card-title>
          <v-card-text>
            <div v-if="user">
              <img v-if="user.photo" :src="user.photo" alt="User Photo" class="user-photo">
              <p>Добро пожаловать, {{ user.name }} {{ user.surname }}!</p>
              <p>Почта: {{ user.email }}</p>
              <p>Город: {{ user.city }}</p>
            </div>
            <p v-else>Загрузка...</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#715c9c" @click="logout">Выйти</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showOverlay" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          <span>Добро пожаловать!</span>
          <v-btn icon @click="closeOverlay" style="margin-left: 10px;
    margin-top: -10px;">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          Спасибо что выбрали наш магазин.
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      user: null,
      showOverlay: false
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          this.user = storedUser;
          this.checkWelcomeOverlay();
        }
      } else {
        this.$router.push('/login');
      }
    });
  },
  methods: {
    checkWelcomeOverlay() {
      const overlayShown = localStorage.getItem('overlayShown');
      if (!overlayShown) {
        this.showOverlay = true;
        localStorage.setItem('overlayShown', 'true');
      }
    },
    closeOverlay() {
      this.showOverlay = false;
    },
    async logout() {
      await signOut(auth);
      localStorage.removeItem('user');
      localStorage.removeItem('overlayShown');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

.card {
  margin-top: 12px;
  border: 2px solid #837bc4;
  border-radius: 20px;
  margin-bottom: 12px;
}

.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
