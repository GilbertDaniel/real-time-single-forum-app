<template>
   <v-container>
       <v-form @submit.prevent="create">        
            <v-text-field
            v-model="form.title"        
            label="Title"
            type="text"
            required
            ></v-text-field>
            <v-select
            :items="categories"
            v-model="form.category_id"
            item-text="name"
            item-value="id"
            label="Category"
            autocomplete
            ></v-select>
            <!-- <v-textarea
            v-model="form.body"
            name="body"
            label="Message"
            value=""
            hint=""
            ></v-textarea> -->
            
            <vue-simplemde v-model="form.body" ref="markdownEditor" />

            <v-btn color="green" type="submit">Create</v-btn>            
        </v-form>
    </v-container> 
</template>
<script>
import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
  //omponents:{markdownEditor},
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null,
            },
            categories:{},
            errors:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        create(){
            axios.post("/api/question", this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => (this.errors = error.response.data.errors));
        }
    }
}
</script>
<style>
@import '~simplemde/dist/simplemde.min.css';
</style>