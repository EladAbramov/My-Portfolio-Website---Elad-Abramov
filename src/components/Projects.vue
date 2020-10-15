<template>
  <v-main class="projects" id="projects" style="height: 1200px">
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
  }

}
</script>

<style scoped>
#projects {
    background-color: #222831;
}

h3 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  margin: 50px 120px 50px;

}
.first{
  margin-top: 50px;
  margin-left: 125px;
}

.second {
  margin-top: 50px;
  margin-left: 125px;
}
</style>