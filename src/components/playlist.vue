<template>
  <v-card class="mx-auto my-12" max-width="600" dark>
    <v-list>
      <v-subheader>
        <v-btn
          class="mx-5"
          x-small
          @click="suffleOnOff"
          text
          icon
          v-if="shuffle"
          color="#9f8dd1"
        >
          <v-icon>fas fa-random</v-icon>
        </v-btn>
        <v-btn class="mx-5" x-small @click="suffleOnOff" text icon v-else>
          <v-icon>fas fa-random</v-icon>
        </v-btn>
      </v-subheader>
      <v-list-item-group v-model="selectedIndex" color="#9f8dd1" mandatory>
        <v-list-item v-for="(track, index) in tracks" :key="index">
          <v-list-item-icon>
            <v-icon v-if="index != selectedIndex">fas fa-music</v-icon>
            <v-icon v-else>fas fa-play</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              >{{ track.title }} -
              <span v-for="(artist, i) in track.artist" :key="i"
                ><span v-if="i != 0">,</span> {{ artist }}</span
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    tracks: Array,
    currentIndex: Number,
  },
  data() {
    return {
      selectedIndex: this.currentIndex,
      shuffle: false,
    };
  },
  methods: {
    suffleOnOff() {
      this.shuffle = !this.shuffle;
    },
  },
  watch: {
    selectedIndex: function () {
      this.$emit("setTrack", this.selectedIndex);
    },
  },
};
</script>

<style scoped>
</style>