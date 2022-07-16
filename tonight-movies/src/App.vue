<template>

  <nav id="navbar">
        <h1 id="logo">logo</h1>
        
        
        <div class="nav-block">
            <router-link to="/" class="nav-item">home</router-link> 
            <input class="nav-item" type="button" value="about us"/>
              <router-link to="/signup" class="nav-item">signup</router-link>  
              <router-link to="/login" id="login" class="nav-item" >log in </router-link>         
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

#navbar{
    width: 100%;
    height: 50px;
    background-color: black;
    position: fixed;
}
#logo{
    float: left;
    color:#fff;
    margin: 10px;
}
.nav-block{
    float: right;
    padding: 15px;
}
.nav-item{
    margin: 0px 5px;
    background-color: transparent;
    color:white;
    text-decoration: none;
}
#login{
    background-color: #FFC20E;
    padding: 8px 15px;
    margin:  -8px   7px 7px 0px;
    float: right;
    border-radius: 4px;
}
#login:hover{
    background-color: #95771f;
   transition: 1s ease;
}
</style>
