<template>
 <div>

    <nav id="navbar">
          <h1 id="logo">logo</h1>
          <router-link to="/login"  class="nav-item login" >log in </router-link> 
          
          <div class="nav-block">
              <input class="nav-item" type="button" value="movies"/>
              <a href='#des' class="nav-item" >about us</a>
             
              <router-link to="/signup" class="nav-item">signup</router-link>             
          </div>
      </nav>
      <div id="hero-sec">
         
          <div id="gradient">
              <div id="legend">
                  <h3>wanna movie</h3>
                  <h1>make your watching experience</h1>
                  <h1 id="change">more enjoyable</h1>
                  <p id="hero-des">
                join us and be one of our large community to make unforgetable memories while you watching your favourite movie 
                </p>
              </div>
              
          </div>
      </div>    
      <div id="description">
        <div id="des-img">
        </div>
        <div id="des">
          <h1 id="des-legend">what is tonight movies ?</h1>
          <p class="des-text">tonight movies is the platform who search to make your watching experience more and more adorable</p>
          <p class="des-text">our website provides you with one of the best film streamed in cinemas right now and give you the chance to book the place that suits you</p>
          <p class="des-text">don't lose this opportunity and be one of our lovely costumers</p>
        </div>
      </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WelcomePage',
  props: {

  },

});
</script>

<style>
*{
    margin:0;
    padding:0;
}
body{
    height: auto;
    background-color: #2B343E;
}
input{
    -webkit-appearance: none;
}
input:focus {
    outline: none; 

}
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
}
.login{
    background-color: #FFC20E;
    padding: 8px 15px;
    margin:  7px   7px 7px 0px;
    float: right;
    border-radius: 4px;
}
.login:hover{
    background-color: #95771f;
   transition: 1s ease;
}
#hero-sec{
    background-image: url(../images/hero.jpg);
    height: 300px;
    width: 100%;
    background-size: cover;
    /*background: linear-gradient(0deg,black,transparent);*/
    padding-top: 400px;
    
}
#gradient{
    width: 100%;
    height: 300px;
    margin: 300px 0 0 0;
    background: linear-gradient(0deg,#2B343E,transparent);
    margin-top: -55px;
}
#searchbar{
    background-color: white;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    margin: 50px 0px 0px 50px;
    box-shadow: 10px #000;
}
#search-btn{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    float:right;
    background-color:#FFC20E;
    margin:5px;
    cursor: pointer;
}
#search-in{
    border: none;
    width: 200px;
    height: 30px;
    margin: 5px 20px;
}
#legend{
    color:white;
    margin: 55px;
    margin-bottom: 0;
}
h3{
    font-weight: 200;
}
#change{
    font-weight: bold;
    color:#FFC20E;
}
img{
    margin: 8px;
    width: 15px;
    height: 15px;
}
#description{
    width: 50%;
    height: 500px;
    background-color: white;
    margin: 100px 25%;
    border-radius: 25px;
}
#des-img{
  height: 100%;
  width: 40%;
  background-image: url(../images/movie.jpg);
  background-size: cover;
  float: right;
  border-radius: 0 20px 25px 0;
}
#des{
  padding: 80px 50px;
  width: 50%;
  height: 100%;
}
.des-text{
  margin: 20px;
}
#des-legend{
  margin:20px;
}
#hero-des{
    color: white;
    margin-right: 80%;
   opacity: 75%; 
}
</style>
