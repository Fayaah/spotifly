<template>
  <v-main>
    <v-container fill-height fluid>
      <div
        class="background"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/background.jpg') + ')',
        }"
      ></div>
      <v-row align-center justify-space-around align-content-center>
        <v-col>
          <Player
            :track="tracks[playlistIndex]"
            :nbTracks="tracks.length"
            :playing="playing"
            @play="play"
            @pause="pause"
            @previous="previous"
            @next="next"
          />
        </v-col>
        <v-col>
          <Playlist :tracks="tracks" :currentIndex="playlistIndex" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Player from "@/components/player";
import Playlist from "@/components/playlist";

import json from "../data/tracks.json";

export default {
  name: "Home",
  data() {
    return {
      playlistIndex: 0,
      tracks: json.tracks,
      playing: false,
      audio: new Audio(),
    };
  },
  methods: {
    play() {
      if (this.audio) {
        this.audio.src = this.tracks[this.playlistIndex].track_path;

        this.audio.play();
        this.playing = true;
      }
    },
    pause() {
      if (this.audio) {
        this.audio.pause();
        this.playing = false;
      }
    },
    previous() {
      if (this.playlistIndex != 0) {
        this.playlistIndex--;
      }
    },
    next() {
      if (this.playlistIndex != this.tracks.length - 1) {
        this.playlistIndex++;
      }
    },
    setTrack(index) {
      this.playlistIndex = index;
    },
  },
  components: {
    Player,
    Playlist,
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(1%);
}
</style>