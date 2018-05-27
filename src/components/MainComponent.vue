<template>
    <div>
        <v-navigation-drawer app v-model="sideMenuFlag"></v-navigation-drawer>
        <HeaderComponent name="Toni Wong" @toggle="toggleSidebar"></HeaderComponent>
        <v-parallax
            dark
            style="background: linear-gradient(to right, #d3fbad, #d3fbad, #b6eae1);"
        >
            <v-layout
                    align-center
                    column
                    justify-center
            >
                <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
                <h4 class="subheading">Build your application today!</h4>
            </v-layout>
        </v-parallax>
    </div>

</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import ContentComponent from './ContentComponent.vue';
import '../assets/css/Content.css';

export default {
    name: 'MainComponent',
    components: {
        HeaderComponent
    },
    props: {
        msg: String
    },
    methods: {
        toggleSidebar: function() {
            this.sideMenuFlag = !this.sideMenuFlag;
        }
    },
    data () {
        return {
            bottomNav: 'recent',
            sideMenuFlag: false
        }
    }
}
</script>
