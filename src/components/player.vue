<template>
  <v-card class="mx-auto my-12" max-width="374" dark>
    <v-img alt="Spotifly Logo" src="@/assets/images/card.jpg" height="250" />

    <v-card-title> {{ track.title }} </v-card-title>

    <v-card-subtitle>
      <div v-for="(artist, index) in track.artist" :key="index">
        {{ artist }}
        <p></p>
      </div>
    </v-card-subtitle>

    <!-- <v-card-text>
      <v-row justify-center>
        <audio
          ref="player"
          src="@/assets/tracks/little-big/go-bananas.mp3"
          controls
        ></audio>
      </v-row>
    </v-card-text> -->

    <v-card-actions justify-center>
      <v-row>
        <v-col>
          <v-btn
            v-if="track.id != 0"
            class="mx-5"
            x-small
            @click="previous"
            text
            icon
          >
            <v-icon>fas fa-chevron-left</v-icon>
          </v-btn>
          <v-btn v-else class="mx-5" x-small text icon disabled>
            <v-icon>fas fa-chevron-left</v-icon>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn
            v-if="playing == true"
            class="mx-5"
            x-small
            @click="pause"
            text
            icon
          >
            <v-icon>fas fa-pause</v-icon>
          </v-btn>
          <v-btn v-else class="mx-5" x-small @click="play" text icon>
            <v-icon>fas fa-play</v-icon>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn class="mx-5 volume-btn" x-small text icon @click="volumeEdit">
            <v-icon>fas fa-volume-up</v-icon>
          </v-btn>
        </v-col>

        <v-col>
          <v-btn
            v-if="track.id != nbTracks - 1"
            class="mx-5"
            x-small
            @click="next"
            text
            icon
          >
            <v-icon>fas fa-chevron-right</v-icon>
          </v-btn>
          <v-btn v-else class="mx-5" x-small text icon disabled>
            <v-icon>fas fa-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

    <v-card-actions v-if="volumeEdit">
      <v-card dark>
        <v-slider vertical max="50" min="0"> </v-slider>
      </v-card>
    </v-card-actions>

    <v-card-actions justify-center>
      <v-slider min="0" max="50"> </v-slider>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Player",
  props: {
    track: Object,
    nbTracks: Number,
    playing: Boolean,
  },
  date() {
    return {
      volumeEdit: false,
    };
  },
  methods: {
    play() {
      this.$emit("play");
    },
    pause() {
      this.$emit("pause");
    },
    previous() {
      this.$emit("previous");
    },
    next() {
      this.$emit("next");
    },
    volumeEdit() {
      this.volumeEdit = !this.volumeEdit;
    },
    launchTrack() {
      // if (playing) {
      //   //audio.play();
      // } else {
      // }
    },
  },
};
</script>

<style scoped>
</style>