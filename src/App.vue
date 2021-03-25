<template>
<v-app>
    <v-app-bar app
               absolute
               dark
    >
        <v-toolbar-title class="title">{{this.$route.name}}</v-toolbar-title>

        <v-spacer/>

        <v-btn icon v-if="this.$route.name == 'executions'"
               @click="$router.push({name: 'reports'})"
        >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-btn icon v-if="this.$route.name != 'login'"
             @click="logout"
      >
          <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-main>
</v-app>

</template>

<script>
 import { mapGetters } from 'vuex'
 export default {
     computed: {
         ...mapGetters([
             'isLogged'
         ])
     },
     methods: {
         logout () {
             this.$store.dispatch('logout')
         }
     }
 }
</script>
<style>
 .title {
     text-transform: capitalize;
 }
 .v-toolbar {
     background-color: #7289da !important;
 }
</style>
