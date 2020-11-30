<template>
  <v-main class="skills" id="skills">
    <v-container>
      <h4>
        Skills
      </h4>
    </v-container>
    <div class="side">
      <div>
        <h1>Client Side</h1>
      </div>
      <v-row class="row">
        <div class="first">
          <img class="first-logo" src="https://img.icons8.com/windows/512/000000/vuejs.png">
          <h2 class="first-name">VueJS</h2>
          <v-progress-linear class="first-progress" color="orange darken-2" rounded value="65"></v-progress-linear>
        </div>
       <div class="second">
          <img class="second-logo" src="https://img.icons8.com/ios-filled/500/000000/javascript.png">
          <h2 class="second-name">JavaScript</h2>
          <v-progress-linear class="second-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
        <div class="third">
          <img class="third-logo" src="https://img.icons8.com/material/500/000000/css3.png">
          <h2 class="third-name">CSS</h2>
          <v-progress-linear class="third-progress" color="orange darken-2" rounded value="70"></v-progress-linear>
        </div>
        <div class="forth">
          <img class="forth-logo" src="https://img.icons8.com/material/480/000000/html-5.png">
          <h2 class="forth-name">HTML</h2>
          <v-progress-linear class="forth-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
      </v-row>

      <v-row class="row">
        <div class="first">
          <img class="first-logo" src="https://img.icons8.com/material/500/000000/android-os--v1.png">
          <h2 class="first-name">Android</h2>
          <v-progress-linear class="first-progress" color="orange darken-2" rounded value="65"></v-progress-linear>
        </div>
       <div class="second">
          <img class="second-logo" src="https://img.icons8.com/material/96/000000/flutter.png">
          <h2 class="second-name">Flutter</h2>
          <v-progress-linear class="second-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
        <div class="third">
          <img class="third-logo" src="https://img.icons8.com/ios-filled/500/000000/unity.png">
          <h2 class="third-name">Unity3D</h2>
          <v-progress-linear class="third-progress" color="orange darken-2" rounded value="70"></v-progress-linear>
        </div>
        <div class="forth">
          <img class="forth-logo" src="https://img.icons8.com/material/500/000000/ios-logo.png">
          <h2 class="forth-name">iOS</h2>
          <v-progress-linear class="forth-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
      </v-row>
    </div>

    <div class="side">
      <div>
        <h1>Server Side And Database</h1>
      </div>
      <v-row class="row">
        <div class="first">
          <img class="first-logo" src="https://img.icons8.com/windows/512/000000/nodejs.png">
          <h2 class="first-name">NodeJS</h2>
          <v-progress-linear class="first-progress" color="orange darken-2" rounded value="65"></v-progress-linear>
        </div>
       <div class="second">
          <img class="second-logo" src="../assets/mongodb.svg">
          <h2 class="second-name">MongoDB</h2>
          <v-progress-linear class="second-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
        <div class="third">
          <img class="third-logo" src="../assets/postgreSQL.svg">
          <h2 class="third-name">PostgreSQL</h2>
          <v-progress-linear class="third-progress" color="orange darken-2" rounded value="70"></v-progress-linear>
        </div>
        <div class="forth">
          <img class="forth-logo" src="https://img.icons8.com/color/480/000000/firebase.png">
          <h2 class="forth-name">Firebase</h2>
          <v-progress-linear class="forth-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
      </v-row>

      <v-row class="row">
        <div class="first">
          <img class="first-logo" src="https://img.icons8.com/color/480/000000/elasticsearch.png">
          <h2 class="first-name">ES</h2>
          <v-progress-linear class="first-progress" color="orange darken-2" rounded value="65"></v-progress-linear>
        </div>
       <div class="second">
          <img class="second-logo" src="https://img.icons8.com/material/480/000000/python.png">
          <h2 class="second-name">Python</h2>
          <v-progress-linear class="second-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
        <div class="third">
          <img class="third-logo" src="https://img.icons8.com/material/500/000000/heroku.png">
          <h2 class="third-name">Heroku</h2>
          <v-progress-linear class="third-progress" color="orange darken-2" rounded value="70"></v-progress-linear>
        </div>
        <div class="forth">
          <img class="forth-logo" src="https://img.icons8.com/material/512/000000/git.png">
          <h2 class="forth-name">Git</h2>
          <v-progress-linear class="forth-progress" color="orange darken-2" rounded value="75"></v-progress-linear>
        </div>
      </v-row>
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

.skills {
  background-color: #222831;
  height: 1800px;
}
@media (max-width: 900px) {
  .skills {
    height: 1600px;
  }
  .first {
    margin: 30px !important;
    margin-left: 80px!important;
    width: 50px !important;
    height: 50px !important;
  }
  .second {
    margin: 30px !important; 
    width: 50px !important;
    height: 50px !important;
  }
  .third {
    margin: 30px !important;
    width: 50px !important;
    height: 50px !important;
  }
  .forth {
    margin: 30px !important;
    width: 50px !important;
    height: 50px !important;
  }
  .first-name {
    font-size: 16px !important;
  }

  .second-name {
      font-size: 16px !important;
  }
  .third-name {
    font-size: 16px !important;
  }
  .forth-name {
    font-size: 16px !important;
  }
  .first-progress {
    width: 75px !important;
    left: 0px !important;  
  }
  .second-progress {
    width: 75px !important;
    left: 0px !important;  
  }
  
 .third-progress {
    width: 75px !important;
    left: 0px !important;  
  }
  .forth-progress {
    width: 75px !important;
    left: 0px !important;  
  }
  .first-logo {
    width: 45px !important;
    height: 45px !important;
  }
  .second-logo {
    width: 45px !important;
    height: 45px !important;
  }
  .third-logo {
    width: 45px !important;
    height: 45px !important;
  }
  .forth-logo {
    width: 45px !important;
    height: 45px !important;
  }
 
}

h4 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  margin: 50px 120px 50px;
}

.side {
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
}

h1 {
  line-height: 1.15;
  align-content: center;
  font-size: 32px;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
}


.row {
  margin-top: 60px;
}
.first {
  line-height: 1.15;
  flex-direction: column;
  margin: 30px;
  margin-left: 400px;
  width: 150px;
  height: 130px;
}
.first:hover {
  .first-logo {
    width: 80px;
    height: 80px;
  } 
}

.first-logo {
  line-height: 1.15;
  width: 60px;
  height: 60px;
  flex-direction: row;
  transition: .3s ease;
  filter: brightness(0) invert(1);
}



.first-name {
  line-height: 1.15;
  flex-direction: column;
  font-size: 22px;
  font-family: 'Fira Mono', monospace;
  color: #fff;
  margin-top: 5px;
}

.first-progress {
  line-height: 1.15;
  margin-top: 15px;
  left: 20px;  
  width: 115px;
}
.second {
  line-height: 1.15;
  flex-direction: column;
  margin: 30px;
  width: 150px;
  height: 130px;
}
.second:hover {
  .second-logo {
    width: 80px;
    height: 80px;
  }
  
}
.second-logo {
  line-height: 1.15;
  width: 60px;
  height: 60px;
  flex-direction: row;
  transition: .3s ease;
  filter: brightness(0) invert(1);
}

.second-name {
  line-height: 1.15;
  flex-direction: col;
  font-size: 22px;
  font-family: 'Fira Mono', monospace;
  color: #fff;
  margin-top: 5px;
}

.second-progress {
  line-height: 1.15;
  margin-top: 15px;
  width: 115px;
  left: 20px;  
}

.third {
  line-height: 1.15;
  flex-direction: column;
  margin: 30px;
  width: 150px;
  height: 130px;
}
.third:hover {
  .third-logo {
    width: 80px;
    height: 80px;
  }
  
}
.third-logo {
  line-height: 1.15;
  width: 60px;
  height: 60px;
  flex-direction: row;
  transition: .3s ease;
  filter: brightness(0) invert(1);
}

.third-name {
  line-height: 1.15;
  flex-direction: column;
  font-size: 22px;
  font-family: 'Fira Mono', monospace;
  color: #fff;
  margin-top: 5px;
}

.third-progress {
  line-height: 1.15;
  margin-top: 15px;
  width: 115px;
  left: 20px;  
}
.forth {
  line-height: 1.15;
  flex-direction: column;
  margin: 30px;
  width: 150px;
  height: 130px;
}
.forth:hover {
  .forth-logo {
    width: 80px;
    height: 80px;
  }
  
}
.forth-logo {
  line-height: 1.15;
  width: 60px;
  height: 60px;
  flex-direction: row;
  transition: .3s ease;
  filter: brightness(0) invert(1);
}

.forth-name {
  line-height: 1.15;
  flex-direction: column;
  font-size: 22px;
  font-family: 'Fira Mono', monospace;
  color: #fff;
  margin-top: 5px;
}

.forth-progress {
  line-height: 1.15;
  margin-top: 15px;
  width: 115px;
  left: 20px;  
}
</style>