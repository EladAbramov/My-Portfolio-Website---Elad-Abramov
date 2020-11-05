<template>
  <v-main class="about-me" id="about-me" style="height: 1000px">
    <v-container>
      <h3>
        About me
      </h3>
      <div class="all" id="all" style="width: 550px">
        <div>
          Hi again, I'm Elad Abramov and I'm a software engineer. I was born in Israel, where I still live, but my dream was to travel. After completing my military service I made that dream come true by traveling throughout South America.
        </div>
        <div>
          After college I started my career as a Android Developer, and from there I continued developing for different platforms, using a variety of tools.
        </div>
        <div>
          I'm a highly motivated person, fast learner and I always make sure to get the job done, no matter what obstacles I face.
        </div>
      </div>
      <div class="title-work" id="title-work">At Work</div>
      <div class="at-work" id="at-work" style="width: 500px">
        <div>
          I'm a strong communicator, UI/UX oriented and what drives me is my professionalism.
        </div>
        <div>
          I aim for authenticity, transparency and hard work out of care and respect for the people I work with and the result I produce.
        </div>
      </div>
      <div class="title-inlife" id="title-inlife">In Life</div>
      <div class="at-inlife" id="at-inlife" style="width: 500px">
        <div>
          Outside of work I'm a gamer - no matter the platform, a traveler - no matter the destination, and DIY is my passion.
        </div>
        
      </div>
      <v-avatar size="300">
        <v-img src="../assets/me2.jpg" alt="elad"></v-img>
      </v-avatar>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@700&display=swap');

#about-me{
  background-color: #30475E
}

h3 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  margin: 50px 120px 50px;

}

.v-avatar {
  border-color: #f2a365 !important;
  left: 750px;
  bottom: 700px;
  border: 6px solid;
}

#all{
  margin: 0 0 0 120px;
  line-height: 1.15;
  font-size: 20px;
  color: #fff;
  font-family: 'Fira Mono', monospace;
}

#title-work {
  margin: 20px 0 0 120px;
  color: #f2a365 !important;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  font-size: 22px;
  
}

#at-work {
  margin: 0 0 0 120px;
  line-height: 1.15;
  font-size: 20px;
  color: #fff;
  font-family: 'Fira Mono', monospace;
  flex-direction: column;
}

#title-inlife {
  margin: 20px 0 0 120px;
  color: #f2a365 !important;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  font-size: 22px;
  
}

#at-inlife {
  margin: 0 0 0 120px;
  line-height: 1.15;
  font-size: 20px;
  color: #fff;
  font-family: 'Fira Mono', monospace;
  flex-direction: column;
}
</style>