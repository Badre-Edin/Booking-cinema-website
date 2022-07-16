<template>
   
   
  <nav id="navbar">
    <h1 id="logo">logo</h1>


    <div class="nav-block">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/aboutus" class="nav-item">About Us</router-link>
      <router-link to="/signup" class="nav-item">Signup</router-link>
      <router-link to="/login" class="nav-item login">Log in </router-link>
    </div>
  </nav>

  <router-view />
</template>
<script lang="ts">

export default {
  name: 'defineComponent',
}
</script>

<style>
#navbar {
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.89);
  padding: 1rem 0%;
  justify-content: space-between;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  padding: 15px;
  font-family: Arial;
  text-align: center;
  vertical-align: top;


}

#logo {
  float: left;
  color: #fff;
  margin: 10px;
}

.nav-block {
  margin-left: 1200px;
  position: relative;
  padding: 1rem 2%;

}

.nav-item {
  margin: 0px 5px;
  background-color: transparent;
  color: white;
  text-decoration: none;
  padding: 3%;
}
.nav-item:hover {
  color: rgb(255, 174, 0);
}

.login {
  background-color: #FFC20E;
  padding: 8px 15px;
  margin: -8px 7px 7px 0px;
  float: right;
  border-radius: 4px;
}

.login:hover {
  background-color: #FFC20E;
  transition: 1s ease;
  color: #030303;
}

</style>
