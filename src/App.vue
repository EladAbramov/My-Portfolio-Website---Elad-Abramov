<template>
  <v-app id="app">
    <nav-bar />
    <intro/>
    <about-me/>
    <skills />
    <experience />
    <projects />
    <contact />
  </v-app>
  
</template>

<script>

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



export default {
  name: 'App',

  components: {
    NavBar,
    Intro,
    AboutMe,
    Skills,
    Experience,
    Projects,
    Contact,
  },
};
</script>
