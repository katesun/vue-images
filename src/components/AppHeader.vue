<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <!-- v-else must be placed after element with v-if -->
      <a v-else href='#' class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
// hook up actions inside a module to component
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: {
    // Don't have to specify module
    ...mapActions([
      'login',
      'logout'
      ])
  }
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>