<template>
    <div>
        <p>Track : {{ $route.params.track_name }} </p>
        <v-btn @click="goComments">HELL</v-btn>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.params);
    }, 
    methods: {
        goComments() {
            this.$router.push({name: 'Track\'s Comments', 
            params: {track_name: this.$route.params.track_name}})
        }
    }
}
</script>