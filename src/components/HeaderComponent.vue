<template>
    <v-toolbar>
        <v-toolbar-side-icon v-on:click="toggleIcon"></v-toolbar-side-icon>
        <v-toolbar-title>{{name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn fab color="red"><v-icon color="white">fab fa-google</v-icon></v-btn>
            <v-btn fab color="blue"><v-icon color="white">fab fa-facebook-f</v-icon></v-btn>
            <v-btn fab dark color="blue"><v-icon color="white">fab fa-twitter</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
    export default {
        name: 'HeaderComponent',
        props: {
            name: String,
            google_link: String,
            twitter_link: String
        },
        methods: {
            toggleIcon: function() {
                this.$emit('toggle');
            }
        }
    }
</script>