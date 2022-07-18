<template>
  <div id="background">
    <div id="container1">
      <form @submit.prevent="login">
        <h1>login to your account</h1>
        <input type="text" class="field" placeholder="username" required v-model="form.username" />
        <input type="text" id="help" class="field" placeholder="password" required v-model="form.password" />
        <button type="button" id="login-btn" v-on:click="navigateTo({ name: 'HomePage' })"> login</button>
      </form>
    </div>

  </div>


</template>

<script lang="ts">

import { defineComponent } from 'vue';
import DataService from '../services/DataService';
import ResponseData from '../types/ResponseData';
import User from '../types/User';

export default defineComponent({
  name: 'LoginForm',
  data() {
    return {
      form: {
        username: "",
        password: "",
      } as User,
    }
  },
  methods: {
    login() {
      let data = {
        username: this.form.username,
        password: this.form.password,
      }
      DataService.access(data)
        .then((response: ResponseData) => {

        })
    },
    navigateTo(route: any) {
      this.$router.push(route)
    }
  }
})


</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
  text-align: center;
}

#background {
  *background-image: url('../images/back.jpg');
  background-size: cover;
  width: 100%;
}

body {
  background-image: url('../images/back.jpg');
  background-size: cover;
}

#container1 {
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.87);
  margin: 200px 560px;
  padding: 50px;
}

input {
  -webkit-appearance: none;
}

input:focus {
  outline: none;

}

.field {
  display: block;
  margin: 3% 25%;
  padding: 10px 20px;
  border: 1px solid #808080;
  background-color: #f1f1f1;
}

.field:focus {
  background-color: #ffe8a2;
  border: 2px solid #FFC20E;
}

h1 {
  padding: 10%;
}

#login-btn {
  background-color: #FFC20E;
  border-radius: 2px;
  border: none;
  padding: 10px 20px;
  margin: 20%;
  margin-top: 20px;
  cursor: pointer;
  color: white;
}

#login-btn:hover {
  background-color: #95771f;
  transition: 1s ease;
}

#help {
  margin-bottom: 40px;
}

.field:focus {
  background-color: #ffe8a2;
  border: 2px solid #FFC20E;
}

h1 {
  padding: 10%;
}

#login-btn {
  background-color: #FFC20E;
  border-radius: 2px;
  border: none;
  padding: 10px 20px;
  margin: 5% 20%;
  cursor: pointer;
  color: white;
}

#login-btn:hover {
  background-color: #0c0c0c;
  transition: 1s ease;
}
</style>
