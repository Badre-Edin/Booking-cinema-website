<template>
  <div class="login">
    <form @submit.prevent="login">
      <section>
        <div class="form-group">
          <label for="username">Username</label><br />
          <input class="form-control" placeholder="Enter your name" type="username" required
            v-model="form.username" /><br />
          <label for="password">Password</label><br />
          <input class="form-control" type="password" placeholder="password" required v-model="form.password" /><br />
          <br />
          <router-link to="/HomePage" class="btn">Login</router-link>
        </div>
      </section>
    </form>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import DataService from '@/services/DataService';
import ResponseData from '@/types/ResponseData';
import User from '@/types/User';

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
      .then((response: ResponseData)=>{
        
      })
    }
  }
})


</script>


<style scoped>
form {
  text-align: center;
  padding-top: 200px;


}


.btn {
  font-size: large;
  width: 38.5%;
  background-color: hwb(242 10% 68% / 0.747);
  color: white;
  padding: 14px 20px;

  margin-left: -350px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
}



.btn:hover {
  background-color: rgba(165, 42, 42, 0.733);
  color: white;
}

input {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  color: white;
  font-size: large;

  margin-right: auto;

}
</style>
