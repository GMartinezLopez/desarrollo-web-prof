<template>
  <div>
    <div v-if="!isLoggedIn">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="loginData.username.value" placeholder="Usuario">
        <input type="password" v-model="loginData.password.value" placeholder="Contraseña">
        <button type="submit">Iniciar Sesión</button>
        <p v-if="loginError" class="error">{{ loginError }}</p>
      </form>
      <hr>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="registerData.username.value" placeholder="Usuario">
        <input type="password" v-model="registerData.password.value" placeholder="Contraseña">
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

<script setup lang="ts">
import type { interUser } from '@/interfaces/interUser'
import DataUsers from '../data/DataUsers'
import { ref, computed, onMounted } from 'vue';

let loginData = {
  username: ref(''),
  password: ref('')
}

let registerData = {
  username: ref(''),
  password: ref('')
}

let currentUser = ref(null as interUser | null), users = DataUsers as interUser[], loginError = ref(''), registerError = ref(''), registerSuccess = ref(false);

let login = () => {
      const user = users.find(u => u.username === loginData.username.value && u.password === loginData.password.value);
      if (user) {
        currentUser.value = user;
        loginError.value = '';
      } else {
        loginError.value = 'Usuario o contraseña incorrectos';
      }
}

let register = () => {
      if (registerData.username && registerData.password) {
        if (!users.find(u => u.username === registerData.username.value)) {
          users.push({ username: registerData.username.value, password: registerData.password.value });
          registerSuccess.value = true;
          registerError.value = '';
          console.log(users);
        } else {
          registerError.value = 'El usuario ya existe';
        }
      } else {
        registerError.value = 'Ingresa un usuario y contraseña';
      }
}

let logout = () => {
      currentUser.value = null;
      loginData.username.value = '';
      loginData.password.value = '';
      registerData.username.value = '';
      registerData.password.value = '';
      loginError.value = '';
      registerError.value = '';
      registerSuccess.value = false;
}

let isLoggedIn = computed(() => {return !!currentUser.value;})

onMounted(() => {
    console.log(users);
  }
)
</script>

<!-- <script lang="ts">
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
          console.log(this.users);
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
</script> -->

<style scoped>

hr {
  margin: 20px;
}
.error {
  color: red;
}
.success {
  color: green;
}
</style>