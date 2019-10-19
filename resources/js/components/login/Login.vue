<template>
  <div>
    <v-container>
        <v-form @submit.prevent="login">        
        <v-text-field
        v-model="form.email"        
        label="E-mail"
        required
        ></v-text-field>
        <v-text-field
        v-model="form.password"
        label="Password"
        required
        type="password"        
        ></v-text-field>

        <v-btn color="green" type="submit">Login</v-btn>
    </v-form>
    </v-container>
  </div>
</template>
<script>
import * as axios from 'axios';
export default {
    data(){
        return{
            form:{
                email:null,
                password:null
            }
        }
    },
    methods:{
        login(){
            axios.post('api/auth/login',this.form)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
            // axios.post('api/auth/login',this.form)
            // .then(res => console.log(res.data))
            // .error(error => console.log(error.response.data))
        }
    }
}
</script>
<style>

</style>