<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="auth-card">
          <v-card-title>
            <span class="headline">{{ loginForm ? 'Вход' : 'Регистрация' }}</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-inner-icon="mdi-account" hide-details single-line variant="" v-if="!loginForm" label="Имя *" v-model="name" class="auth-field"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-account" hide-details single-line variant="" v-if="!loginForm" label="Фамилия" v-model="surname" class="auth-field"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-phone" hide-details single-line variant="" v-if="!loginForm" label="Номер телефона *" v-model="phone" class="auth-field"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-city" hide-details single-line variant="" v-if="!loginForm" label="Город" v-model="city" class="auth-field"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-email-outline" hide-details single-line variant="" :label="loginForm ? 'Почта' : 'Почта *'" v-model="emailPhone" class="auth-field"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-lock-outline" hide-details single-line variant="" :label="loginForm ? 'Пароль' : 'Придумайте пароль *'" v-model="password" type="password" class="auth-field"></v-text-field>
<p class="span" v-if="!loginForm" style="font-size: 0.8em;
    color: rgb(117, 117, 117);
    margin-bottom: 2px;
    margin-left: 17px;
    top: -7px;
    position: relative;">Пароль должен содержать не менее 6 символов</p>

              <v-file-input accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-camera" hide-details single-line variant="" v-if="!loginForm" label="Добавить фотографию" v-model="photo" class="auth-field-ph"></v-file-input>
              <p v-if="!loginForm" class="mandatory-fields">* - Обязательные поля для заполнения</p>
              <v-checkbox v-if="!loginForm" label="Я согласен на обработку персональных данных" v-model="registered" class="auth-checkbox"></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="button" @click="submitForm" :disabled="!registered">{{ loginForm ? 'Войти' : 'Зарегистрироваться' }}</v-btn>
            <v-btn text @click="toggleForm">{{ loginForm ? 'Регистрация' : 'Вход' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

export default {
  data() {
    return {
      loginForm: true,
      name: '',
      surname: '',
      phone: '',
      city: '',
      photo: null,
      emailPhone: '',
      password: '',
      registered: false
    };
  },
  methods: {
    toggleForm() {
      this.loginForm = !this.loginForm;
    },
    async submitForm() {
      if (this.loginForm) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.emailPhone, this.password);
          const user = userCredential.user;
          const storedUser = {
            name: this.name,
            surname: this.surname,
            email: user.email,
            phone: this.phone,
            city: this.city,
            photo: this.photo
          };
          localStorage.setItem('user', JSON.stringify(storedUser));
          console.log('Вход выполнен:', user);
          this.$router.push('/user-profile');
        } catch (error) {
          console.error('Ошибка входа:', error.message);
          alert('Ошибка входа: ' + error.message);
        }
      } else {
        if (!this.registered) {
          alert('Вы должны согласиться с условиями использования');
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.emailPhone, this.password);
          const user = userCredential.user;
          const storedUser = {
            name: this.name,
            surname: this.surname,
            email: user.email,
            phone: this.phone,
            city: this.city,
            photo: this.photo
          };
          localStorage.setItem('user', JSON.stringify(storedUser));
          await axios.post('http://localhost:3000/save-user', storedUser);
          console.log('Регистрация выполнена:', user);
          this.$router.push('/user-profile');
        } catch (error) {
          console.error('Ошибка регистрации:', error.message);
          alert('Ошибка регистрации: ' + error.message);
        }
      }
    }
  }
};
</script>

<style scoped>

.span {
  margin-bottom: 10px;
}

body {
  font-family: Roboto, sans-serif;
}

.auth-card {
  margin-top: 12px;
  border: 2px solid #837bc4;
  border-radius: 20px;
  margin-bottom: 12px;
}

.auth-field {
  margin-bottom: 10px;
  border: 1px solid #837bc4;
  width: 100%;
  height: 20%;
  background-color: white;
  border-radius: 15px;
  color: #715c9c;
}

.auth-field-ph {
  padding-left: 12px;
  width: 100%;
  height: 20%;
  background-color: white;
  border-radius: 15px;
  color: #715c9c;
  border: 1px solid #837bc4;
  margin-bottom: 10px;
}

.auth-checkbox {
  background-color: white;
  color: #715c9c;
  height: 44px;
}

.button {
  background-color: #715c9c;
  color: white;
}

.mandatory-fields {
  margin-bottom: 10px;
  margin-left: 10px;
  color: #715c9c;
  font-size: 16px;
}

</style>
