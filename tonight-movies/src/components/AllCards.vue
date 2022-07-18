<template>
  <div class="holder">
    <div class="Container" v-for="movie in Movies" :key="movie.idmovie">
      <div class="MovieContainer">

        <img :src="`${movie.imgurl}`" alt="image" />
        <div id="film-des">
          <h2 class="MovieName">{{ movie.name }}</h2>
          <h2 class="Movietime">{{ movie.time }}</h2>
        </div>
        <button class="watch" @click="navigateTo({ name: 'BookingPage' }); sendMovie(movie)"> Watch </button>
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
      Movies: [],
    }
  },
  methods: {
    navigateTo(route: any) {
      this.$router.push(route)
    },
    fetchData() {
      axios.get("http://localhost:3000/movies").then(response => {
        this.Movies = response.data
        console.log("Movies are fetched")
      })
    },
    sendMovie(movie: any) {
      console.log(movie)
      axios.put("http://localhost:3000/onemovie", movie).then(response => {
        console.log("movie sended to backend");
      })
    }

  },

  mounted: function () {
    this.fetchData() //method1 will execute at pageload
  },
}
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.holder {
  width: 85%;
  float: right;
  margin-left: 100px;

}

.Container {
  display: inline-block;
}

.MovieContainer {
  text-align: center;
  display: inline-block;
  border: 5px solid rgb(190, 189, 189);
  border-radius: 15px;
  width: 300px;
  padding: 20px;
  margin: 10px;
  height: 600px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: white;
  /* Old browsers */
}

.MovieContainer:hover {
  border: 5px solid #FFC20E;
  opacity: 80%;
}

img {
  width: 275px;
  height: 450px;
  border: 2px solid grey;
  margin: 10px;
}

.watch {
  width: 280px;
  margin-bottom: -50px;
  height: 60px;
  padding: 10px 20px;
  background-color: #FFC20E;
  border-radius: 3px;
  color: black;
  color: white;
}

.watch:hover {
  background-color: #95771f;
  transition: 1s ease;
}

.MovieName {
  font-size: 15px;
  margin: 0px;
}

.Movietime {
  font-size: 15px;
  margin: -0px;
  opacity: 100%;
}

#film-des {
  margin: 20px;
}
</style>
