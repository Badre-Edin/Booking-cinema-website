<template>
    <div>
        <div id="background"></div>
        <div id="content-log">
            <div id="holder">
                <h1 class="legend">welcome to tonight movies</h1>
                <p id="hero">join us and sign up now to make your watching experience more wonderful </p>
                <label for="username">Username</label>
                <input class="field" placeholder="enter your name" required v-model="user.username" name="username" />
                <label for="email">Email</label>
                <input class="field" placeholder="Enter your email" required v-model="user.email" name="email" />
                <label for="date">Date</label>
                <input type="date" id="date" class="field" placeholder="date naissance" />
                <label for="password">Password</label>
                <input class="field" type="password" placeholder="Password" required v-model="user.password"
                    name="password" />
                <label for="confirmPassword">Confirm Password</label>
                <input class="field" type="password" placeholder="confirm password" />
                <button @click="saveUser" @dblclick="navigateTo({ name: 'login' })" id="signup-btn"
                    type="submit">SignUp</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataService from '@/services/DataService';
import User from '@/types/User';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
    name: 'SignUpForm',
    data() {
        return {
            user: {
                id: null,
                username: "",
                email: "",
                password: "",
            } as User,
        };
    },
    methods: {
        saveUser() {
            let data = {
                username: this.user.username,
                email: this.user.email,
                password: this.user.password,
            }
            DataService.create(data)
                .then((response: ResponseData) => {
                    this.user.id = response.data.id;
                    console.log(response.data);

                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
        navigateTo(route: any) {
            this.$router.push(route)
        }
    }

});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap');

*{
margin: 0px;
padding: 0px;
text-align: left;
}
input{
    -webkit-appearance: none;
}
input:focus {
    outline: none; 

}
#background{
    background-image: url("../images/background.jpg");
    background-size: cover;
    width: 70%;
    float: right;
    height: 750px;
}
#content-log{
    background-color:white;
    width: 30%;
    float:left;
    height: 750px;
    position: relative;
    margin-top: 50px;
}
#holder{
    padding: 20%;
}
.legend{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
    padding: 10%;
    padding-left: 0;
}
.field{
    display: block;
    margin: 3% 0;
    padding: 10px 20px ;
    border:1px solid #808080;
    background-color: #f1f1f1;
}
.field:focus{
    background-color: #ffe8a2;
    border: 2px solid #FFC20E;
}
#hero{
    padding: 20%;
    padding-left: 0%;
    padding-top: 0;
}
#date{
    padding: 10px 46px;
}
#signup-btn{
    background-color: #FFC20E;
    border-radius: 2px;
    border: none;
    padding: 10px 20px;
    margin: 10% 20% ;
    cursor: pointer;
    color:white;
}
#signup-btn:hover{
    background-color: #95771f;
   transition: 1s ease;
}
</style>