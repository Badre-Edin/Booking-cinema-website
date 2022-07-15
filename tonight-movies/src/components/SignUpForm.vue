<template>
    <form>
        <div class="form-group">
            <label for="username">Username</label><br />
            <input class="form-control" placeholder="enter your name" required v-model="user.username"
                name="username" /><br />

            <label for="email">Email</label><br />
            <input class="form-control" placeholder="Enter your email" required v-model="user.email"
                name="email" /><br />

            <label for="password">Password</label><br />
            <input class="form-control" type="password" placeholder="Password" required v-model="user.password"
                name="password" /><br />

            <button @click="saveUser" class="btn" type="submit">SignUp</button>
        </div>
    </form>
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
        }
    }
});
</script>

<style>
form {
    text-align: center;
    padding-top: 200px;
}

.button {
    font-size: large;
    width: 38.5%;
    background-color: hwb(242 10% 68% / 0.747);
    color: white;
    padding: 14px 20px;

    margin-left: -350px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.2s;
    position: absolute;
}



.button:hover {
    background-color: rgba(165, 42, 42, 0.733);
    color: white;
}

input {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

label {
    color: white;
    font-size: large;

    margin-right: auto;

}
</style>