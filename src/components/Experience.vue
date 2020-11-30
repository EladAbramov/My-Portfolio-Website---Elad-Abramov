<template>
  <v-main class="experience" id="experience">
    <v-container>
        <h3>
          Work experience
        </h3>
        <v-container>
          <v-card class="first-exp">
            <v-card-title class="position">Flutter Developer<div class="year ml-16">2020</div></v-card-title>
            <v-card-text class="name-city">CloseApp, Remote</v-card-text>
            <v-divider class="mx-15 xl-15 mt-4"></v-divider>
            <div class="description mt-6">In charge of development of mobile applications using Flutter for the front<br> end and Firebase for back end.</div>
            <v-card-actions>
              <v-btn class="company-button mx-auto mt-6"
                text
                color="orange"
                @click="goToCloseApp">
                Company Website
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
        <p></p>
        <v-container>
          <v-card class="first-exp">
            <v-card-title class="position">iOS Developer<div class="year ml-16">(mid)2020</div></v-card-title>
            <v-card-text class="name-city">Mars Technologies, Herzliya</v-card-text>
            <v-divider class="mx-15 xl-15 mt-4"></v-divider>
            <div class="description mt-6">In charge of development of AppleTv applications using Swift for the front end and JSON for the data.</div>
            <v-card-actions>
              <v-btn class="company-button mx-auto mt-6"
                text
                color="orange"
                @click="goToMarsTech">
                Company Website
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Experience',
  data: () => ({
      selection: 1,
    }),

    methods: {
      goToCloseApp(){
        window.open("https://closeapp.co.il/", '_blank');
      },
      goToMarsTech(){
        window.open("http://mars-technologies.com/", '_blank');
      }
    },

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap');

.experience {
  background-color: #30475E;
  height: 1000px;
}

@media (min-width: 550px) and (max-width: 900px) {
  h3 {
    font-size: 44px!important;
    width: 550px!important;
    margin: 0px 20px 0px!important;
  }
  .first-exp {
    left: 10px!important;
  }
}

h3 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  margin: 50px 120px 50px;

}

.first-exp {
  max-width: 500px;
  height: 300px;
  top: 50px;
  left: 110px;
  flex-direction: column;
  background-color: #ececece5 !important
}

.company-button {
  background-color: lightgray;
}

.position {
  line-height: 1.15;
  overflow: hidden;
  margin-left: 42px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 28px;
  font-family: 'Fira Sans', sans-serif;
  color: #222831 !important;
}

.name-city {
  line-height: 1.15;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #222831 !important;
  font-size: 20px;
  margin-left: 42px;
  font-family: 'Fira Mono', monospace;
}
.description {
  line-height: 1.15;
  color: #222831 !important;
  font-size: 20px;
  margin-left: 59px;
  font-family: 'Fira Sans', sans-serif;
}

.year {
  line-height: 1.15;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #222831 !important;
  font-size: 16px;
  font-family: 'Fira Sans', sans-serif;
  align-self: center;
}
.theme--light.v-divider {
    border-color: rgba(151, 150, 150, 0.906) !important; 
}
</style>