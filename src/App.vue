<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-4" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Matcha PORTFOLIO</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        dark
        color="white" 
        target="_blank"
        v-for="(v,i) in menus"
      >
        <!-- <span class="mr-2">Latest Release</span> -->
        <a href="#" v-scroll-to="'#'+v" style="text-decoration: none;"><font color="white">{{v}}</font></a>
      </v-btn>
    </v-app-bar>
    <!-- <v-content> -->
    <transition name="fade" appear mode="out-in">
      <div v-show="show" >
        <router-view class="view"></router-view>
      </div>
    </transition>
    <!-- </v-content> -->
    <v-btn @click="show=!show">test</v-btn>
    <transition>
        <h1>aaaaa</h1>
    </transition>
    <transition>
      <div v-show="show">
        <h1>bbbb</h1>
      </div>
    </transition>

  </v-app>
</template>

<script>

import firebase from 'firebase'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    menus:["profile","skills","works","history","contact"],
    duration: 300,
    offset: 0,
    easing: 'easeInOutCubic',
    show:true,
  }),
  computed:{
    target () {
      return 1000
        // const value = this[this.type]
        // if (!isNaN(value)) return Number(value)
        // else return value
      },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    }
  },
  methods:{
  }
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>