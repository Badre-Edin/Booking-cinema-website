<template>
  <div class="home">
    <h1 class="welcome">Welcome to Tonight Movies</h1>
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
.welcome {
  color: rgb(255, 174, 0);
  text-align: center;
  padding-top: 200px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
}
</style>
