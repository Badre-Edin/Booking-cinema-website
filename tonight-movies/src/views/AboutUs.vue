<template>
    <div>
        <h1 class="aboutus">About Us</h1><br />
        <img class="img" src="https://yc.cldmlk.com/wmezace6a8ycqfbe2gjcg9vn0m/1525668210220_Cinema-Shot.png"
            alt="cinema" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutUs',
    props: {

    },

});
</script>

<style>
.aboutus {
    color: rgb(255, 174, 0);
    margin-left: 850px;
    padding-top: 200px;
    font-family: Georgia, Times, 'Times New Roman', serif;
    font-size: xx-large;
}

.img {
    margin-left: 400px;
}
</style>