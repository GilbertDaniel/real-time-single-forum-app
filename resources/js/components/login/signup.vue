<template>
  <div>
    <v-container>
        <v-form @submit.prevent="signup"> 
            <v-text-field
            v-model="form.name"        
            label="Name"
            type="text"
            required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

            <v-text-field
            v-model="form.email"        
            label="E-mail"
            type="email"
            required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

            <v-text-field
            v-model="form.password"
            label="Password"
            required
            type="password"        
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
            
            <v-text-field
            v-model="form.password_confirmation"
            label="Confirm Password"
            required
            type="password"        
            ></v-text-field>

            <v-btn color="green" type="submit">SignUp</v-btn>
            <router-link to="/login">
                <v-btn color="blue">Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
  </div>
</template>
<script>
//import * as axios from 'axios';
export default {
    data(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },
   methods:{
       signup(){
            axios.post('/api/auth/signup',this.form)
            .then(res => User.responseAfterLogin(res))
            .catch(error => this.errors = error.response.data.errors)
        }
   } 
}
</script>
<style>

</style>