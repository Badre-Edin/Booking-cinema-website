<template>
<div id="container2">
  <img :src="`${onemovie[0].imgurl}`" alt="image"/>
  
  <div id="right">
    <h1 class="MovieName">{{onemovie[0].name}}</h1><br />

    <h2 class="Movietime">{{onemovie[0].time}}</h2>
    <p class="MovieDesc">{{onemovie[0].description}}</p>
    <div id="hall">
      <div class="reservation" @click="navigateTo({name: 'thankyou' })" >
        Create a reservation for your self

      </div>
 
 
  <!-- <div  class="chairs" v-for="chair in chairs" :key="chair">
      <div id={{chairNumber}} class="onechair" :style="isClicked  ? { 'background-color': '#e6e6e6' }:null " @click="toggleIsClicked"> 
        <v-btn class="buttonNumber" >{{onemovie[0].chair}}</v-btn>
      </div>
    </div>  -->
    </div>
  </div>
</div>    
<!--  @click="changeState(chair,onemovie[0].idmovie)" -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
/* type movie = {
  idmovie:number;
  name:string;
  desc:string;
  imgurl:string;
  categorie:string;
}; */


export default defineComponent({
  name: 'BookingView',
  components: {
      
  },
  data(){
    return{
        chairs:["chair1","chair2","chair3","chair4","chair5"],
  isClicked: false,
    onemovie:[{idmovie:0,name:"",time:"",description:"",imgurl:"",categorie:""}]
    
    }
  },

  methods:{
    recievemovie(){
      axios.get("http://localhost:3000/onemovie").then(response=>{
            this.onemovie=response.data
       console.log("Movies are fetched")
      })
    },
    fetchchairs(){
       axios.get("http://localhost:3000/api/chairs",{data:{idmovie:this.onemovie[0].idmovie}}).then(response=>{
            this.chairs=response.data
       console.log("Movies are fetched")
      })
    },
    changeState(CHAIR:string,idmovie:number){
      axios.put("http://localhost:3000/movies",{data:{"chair":CHAIR,'idmovie':idmovie}}).then(response=>{
       console.log("chairs updated")
      })
    },
     toggleIsClicked: function () {
    this.isClicked = !this.isClicked
  },
  navigateTo (route:any) {
            this.$router.push(route)
        }
  },
  mounted:function(){
        this.recievemovie() //method1 will execute at pageload
        console.log(this.onemovie)
        this.fetchchairs()
        console.log()
  }
});
</script>
<style scoped>
 *{
  margin:0;
  padding:0;
}
.reservation{
  width: 300px;
  height: 40px;
  margin: 10px;
  border: 3px solid black;
  background-color: #FFC20E;
  margin-top: 40px;
  margin-left:150px;
  text-align: center;
  font-size: 20px;
  align-content: center;

}
.reservation:hover{
  background-color: #ffc415c2;
}
 img{
    height: 600px;
    width: 400px;
    display:inline-block;
 }
    .MovieName{
        font-size: 30px;
        color: #FFC20E;
        display:inline-block;
    }
    .Movietime{
font-size: 18px;
display:inline-block;
    }
    .MovieDesc{
  opacity: 80%;    
  font-size: 15px;
  display:inline-block;
    }
    .chairsContainer{
        width: 70%;
        height: 350px;
        padding:10px;
        border: 3px solid rgb(65, 65, 53);
        border-radius: 10px;
        margin-left: 150px;
    }
    .chairs{

    display:inline-block;
        margin: 6px;
        height: 40px;
        background-color: rgb(250, 255, 208);
        
    }
    .onechair{
  width: 40px;

        height: 40px;
        border:3px solid black;
        border-radius: 10px;
        background-color:rgb(249, 255, 162) ;
        text-align: center;
        align-content: center;
        
    }
    .onechair:hover{
      background-color: white;
    }
    
  .banner{
    width: auto;
    height: 200px;
    margin-left: 350px ;
  }
  .buttonNumber{
    color: black;
    font-size: 30px;
    font-family: monospace;
  }
  img{
    width: 20%;
    float: left;
    height: 400px;
  }
  #right{
    width: 75%;
    float:right;
    margin-top: 20px;
  }
  #container2{
    padding: 50px;
    margin:100px 100px;
    border: 5px solid #FFC20E;
    border-radius: 25px;
    width: 80%; 
    height: 400px;
    color: white;
  }
  #hall{
    margin: 20px;
  }
</style>