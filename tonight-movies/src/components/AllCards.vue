<template>
<div class="holder">
 <div class="Container"  v-for="movie in Movies" :key="movie.id">
    <div  class="MovieContainer">
       
        <img :src="`${movie.imgurl}`"
  alt="image"/>
    <h2 class="MovieName">{{movie.name}}</h2>
        <h2 class="Movietime">{{movie.time}}</h2>
       
       <v-btn class="watch"  @click="navigateTo({name: 'BookingPage'})"> Watch </v-btn> 
    </div>

 </div>
</div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
  import axios from 'axios'
export default defineComponent({
  name: 'AllCards',
  data() {
  return {
    Movies: []
  }
},
 methods: {
        navigateTo (route:any) {
            this.$router.push(route)
        },
        fetchData(){
          axios.get("http://localhost:3000/movies").then(response=>{
            this.Movies=response.data
       console.log("Movies are fetched")
      })
        },
        
    },

   mounted:function(){
        this.fetchData() //method1 will execute at pageload
  },
 }
 );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder{
  width: 70%;
  margin-left: 250px;;
}
.Container{
display:inline-block;
margin-top:20px ;
}
.MovieContainer{
    text-align: center;
    display:inline-block;
  

  width: 280px;
  margin: 10px;
 

  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
 background: white; /* Old browsers */
}
img{
    width:275px ;
    height: 450px;
    border: 2px solid grey  ;
    
    margin: 0px;
    
}
img:hover{
    background-color: rgb(59, 59, 59);
}
.watch{
  width: 280px;
  margin:0px;
  height: 60px;
  background-color: yellow;
  color:black;
  
  
}
.MovieName{
  font-size: 15px;
  margin: 0px;
  
}
.Movietime{
font-size: 15px;
  margin: -0px;
  
}
</style>
