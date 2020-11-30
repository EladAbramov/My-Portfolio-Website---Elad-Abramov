<template>
  <v-main class="projects" id="projects">
    <v-container>
      <h3>
        Projects
      </h3>
      <v-card class="first" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/coming-soon.png">
        </v-img>
        <v-card-subtitle class="pb-0">
          Coming Soon
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="second" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/coming-soon.png">
        </v-img>
        <v-card-subtitle class="pb-0">
          Coming Soon
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          'name': 'polyWar',
          'ganre': 'games',
          'platform': 'unity',
          'img': '',
          'description': 'casual game of polygon shoting on other polygons enmies'
        },
        {
          'name': 'lemaache',
          'genre': 'mobile application',
          'platform': 'flutter',
          'img': '',
          'description': 'useful application for jews'
        },
        {
          'name': 'memory game',
          'genre': 'mobile game application',
          'platform': 'android native',
          'img': '',
          'description': 'memory game with cards'
        },
      ],
    }
  },
}
</script>

<style scoped>
.projects {
    background-color: #222831;
    height: 1050px;
    justify-content: center;
    align-items: center;
    min-width: 1100px;

}

@media (max-width: 900px) {
  h3 {
    margin: 0px 20px 0px!important;
  }
  .first{
    right: 100px!important;
  }
  .second{
    right: 100px!important;
  }

 
}

h3 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  margin: 0px 120px 50px;
}
.first{
  margin-left: 125px;
  margin-top: 100px;
}

.second {
  margin-top: 50px;
  margin-left: 125px;
}
</style>