<template>
  <v-main class="intro" id="intro" :style="dynamicColor" style="height: 750px">
    <v-container>
      <v-row class="text-center">
        <v-col>
          <h1>
            Hello, I'm Elad Abramov
          </h1>
          <h2>
            I'm a software developer :)
          </h2>
          <div class="text-center">
            <v-btn @click="scrollTo('about-me')" class="ma-2" outlined large dark tile>
              Learn more
              <v-icon>
                mdi-arrow-right
              </v-icon>
            </v-btn>
         </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'Intro',
    data() {
      return {
        clientX: 0,
        clientY: 0,
        windowWidth: 0,
        windowHeight: 0,
        colorLightness: 35,
        colorAlpha: 0.9,
        hoverActive: true
      }
    },
    methods: {
      scrollTo(element) {
        const el = document.querySelector('#' + element);
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      },

      
      updateMouseLocation(e) {
        let { clientX, clientY } = e;
        if (this.hoverActive) {
          this.clientX = clientX;
          this.clientY = clientY;
        }
      },
      handleResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      }
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        document
            .getElementsByTagName("body")[0]
            .addEventListener("mousemove", this.updateMouseLocation);
        this.handleResize();
    },
   
    computed: {
        colorHue() {
            const hue = (200 / this.windowWidth) * this.clientX;
            return parseInt(hue, 13);
        },
        colorSaturation() {
            const saturation = (30 / this.windowHeight) * this.clientY;
            return parseInt(saturation, 10);
        },
        dynamicColor() {
            return {
              backgroundColor: `hsla(${this.colorHue},
              ${this.colorSaturation}%,
              ${this.colorLightness}%,
              ${this.colorAlpha})`
            };
        }
    },
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&display=swap');
.intro{
  background-size: 200% !important;
  background-position: 96.3517% center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
  
h1{
  line-height: 1.15;
  text-align: center;
  margin-top: 80px;
  flex-direction: row;
  font-family: 'Fira Sans', sans-serif;
  font-size: 80px;
  color: #fff;
  min-width: fit-content;
}

h2{
  margin-top: 30px;
  line-height: 1.15;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  color: #f2a365;
}

.v-btn {
  top: 150px;
  line-height: 1.15;
  font-size: 20px;
  min-height: 60px;
  border: 1px solid #f2a365;
  color: #f2a365 !important;
  font-family: 'Fira Sans', monospace;
  text-transform: none !important;
}

.v-icon {
  left: 10px;
  top: 1px;
  color: #f2a365 !important; 
}

.v-btn:hover  
  .v-icon {
    transform: rotate(90deg);
    transition: transform .3s ease,-webkit-transform .3s ease;
  }

</style>

