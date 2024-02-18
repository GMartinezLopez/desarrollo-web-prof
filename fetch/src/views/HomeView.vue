<template>
  <div>
    <div v-if="!isLoggedIn">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="loginData.username" placeholder="Usuario">
        <input type="password" v-model="loginData.password" placeholder="Contraseña">
        <button type="submit">Iniciar Sesión</button>
        <p v-if="loginError" class="error">{{ loginError }}</p>
      </form>
      <hr>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="registerData.username" placeholder="Usuario">
        <input type="password" v-model="registerData.password" placeholder="Contraseña">
        <button type="submit">Registrarse</button>
        <p v-if="registerSuccess" class="success">Registro exitoso, puedes iniciar sesión ahora.</p>
        <p v-if="registerError" class="error">{{ registerError }}</p>
      </form>
    </div>
    <div v-else>
      <h2>Bienvenido, {{ currentUser?.username }}</h2>
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { interUser } from '@/interfaces/interUser'
import DataUsers from '../data/DataUsers'

export default defineComponent({
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      },
      registerData: {
        username: '',
        password: ''
      },
      currentUser: null as interUser | null,
      users: DataUsers as interUser[],
      loginError: '',
      registerError: '',
      registerSuccess: false
    };
  },
  methods: {
    login() {
      const user = this.users.find(u => u.username === this.loginData.username && u.password === this.loginData.password);
      if (user) {
        this.currentUser = user;
        this.loginError = '';
      } else {
        this.loginError = 'Usuario o contraseña incorrectos';
      }
    },
    register() {
      if (this.registerData.username && this.registerData.password) {
        if (!this.users.find(u => u.username === this.registerData.username)) {
          this.users.push({ username: this.registerData.username, password: this.registerData.password });
          this.registerSuccess = true;
          this.registerError = '';
        } else {
          this.registerError = 'El usuario ya existe';
        }
      } else {
        this.registerError = 'Ingresa un usuario y contraseña';
      }
    },
    logout() {
      this.currentUser = null;
      this.loginData.username = '';
      this.loginData.password = '';
      this.registerData.username = '';
      this.registerData.password = '';
      this.loginError = '';
      this.registerError = '';
      this.registerSuccess = false;
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.currentUser;
    }
  },
  mounted() {
    console.log(this.users);
  },
});
</script>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>