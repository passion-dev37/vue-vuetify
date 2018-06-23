<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        name: 'ContentComponent',
        props: {
            name: String,
            google_link: String,
            twitter_link: String
        },
        methods: {
            toggleIcon: function() {
                console.log("str00")
            }
        }
    }

</script>