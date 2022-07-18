<template>
 <div id="sidebarleft">
    <div id="searchbar">
      <div id="search-btn">
        <img src="../images/search.png" alt=""/>
      </div>
      <input type="text" name="" id="search-in" placeholder="search for movie"/>
    </div>
      <h1>categories</h1>
      <ul id="cat">
        <li class="cat-item">
          All
        </li>
        <li class="cat-item">
          action
        </li>
        <li class="cat-item">
          adventure
        </li>
        <li class="cat-item">
          comedy
        </li>
        <li class="cat-item">
          drama
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftSideBar',
 
 });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebarleft {
  z-index: 500;
  position: fixed;
  left: 250px;
  width: 200px;
  height: 100%;
  margin-top: -90px;
  padding-top: 150px;
  margin-left: -250px;
  overflow-y: auto;
  background: #3c4754;
  border-radius: 5px;
    text-align: center;
  
}
#searchbar{
    background-color: white;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin: 0px 0px 0px 30px;
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
    width: 40px;
    height: 30px;
    margin: 5px 20px;
}
.check{
  width: 20px;
  height: 20px;
}
#cat{
  margin: 40px;
  margin-right:0;
  margin-top: 20px;
  margin-left: 0;
}
.cat-item{
  list-style-type: none;
  padding: 20px;
  padding-left: 70px;
  color:white;
  cursor: pointer;
}
.cat-item:hover{
  background-color: #484d52;
}
h1{
  margin-left:40px;
  margin-top:20px;
  color:white;
}
</style>
