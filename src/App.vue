<template>
  <v-app id="app">
    <v-app-bar app color="#3C3C3C" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Spotifly Logo"
          class="shrink mr-2"
          contain
          src="@/assets/images/logo.png"
          transition="scale-transition"
          min-width="100"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text><span class="mr-2">Home</span></v-btn>
      <v-btn to="/playlists" text><span class="mr-2">Playlist</span></v-btn>
      <v-btn to="/track/skibidi" text><span class="mr-2">Skibidi</span></v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
// import Home from "./views/homepage";

export default {
  name: "App",
  // components: {
  //   Home,
  // },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
