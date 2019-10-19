<template>
    <v-toolbar>
      <v-toolbar-title>Bitfumes</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <!-- <router-link to="/forum">
          <v-btn text>Forum</v-btn>
        </router-link>
        <router-link to="/ask">
          <v-btn text>Ask Question</v-btn>
        </router-link>
        <router-link to="/category">
          <v-btn text>Category</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn text>Login</v-btn>
        </router-link> -->
        <router-link 
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      v-if="item.show">
        <v-btn text>{{item.title}}</v-btn>
      </router-link>
      </div>
    </v-toolbar>
</template>
<script>
export default {
    data() {
    return {
      // loggedIn: User.loggedIn(),
      items: [
        { title: "Forum", to: "/forum", show: true },
        { title: "Ask Question", to: "/ask", show: User.loggedIn() },
        { title: "Category", to: "/category", show: User.loggedIn() },
        { title: "Login", to: "/login", show: !User.loggedIn() },
        { title: "Logout", to: "/logout", show: User.loggedIn() }
      ]
    }
  },
  created() {
    EventBus.$on("logout", () => {
      User.logout();
    });
  }
}
</script>
<style>

</style>