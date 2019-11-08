<template>
  <div id="app">
    <Time :name="name"></Time>
    <ImageLink :link="image"></ImageLink>
    <Dock></Dock>
  </div>
</template>

<script>
import { images, name } from '../config.js';
import Dock from './components/Dock.vue';
import ImageLink from './components/ImageLink.vue';
import Time from './components/Time.vue';

export default {
  name: 'app',
  data() {
    return {
      name,
      showDock: true,
      image: images[Math.floor(Math.random() * images.length)],
    };
  },
  components: {
    Dock,
    ImageLink,
    Time,
  },
  mounted() {
    document.body.style.backgroundImage = `url(${this.image})`;
  }
}
</script>

<style>
body {
  background: black no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
}
</style>
