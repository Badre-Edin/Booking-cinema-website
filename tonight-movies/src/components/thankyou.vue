<template>
    <div id="end">
        <img src="../images/accept.png" alt="">
        <h1>Congrats you have booked a place</h1>
        <h4>Thank you</h4>
    </div>


</template>

<script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'thankyou',
 data(){
    return{
      msg:{
        message:"thank you for your reservation"
      }
      
    }
  },
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    background-color: #2B343E;
}
img{
    width: 150px;
    height: 150px;
    margin-left: 100px;
   
}
#end{
margin-left:450px ;
margin-top:200px;
    color: white;
}
h1{
    margin-left :-50px;
    }
    h4{
        margin-left:80px;
        color: rgb(47, 145, 47);
        font-size: 40px;
    }
</style>
