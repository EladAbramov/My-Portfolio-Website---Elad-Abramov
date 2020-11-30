<template>
    <div>
      <v-app-bar color="#222831" app>
        <div class="mx-auto">
          <label v-for="(anchor, id) in anchors" :key="id">
            <a v-on:click="toggle(id)" v-bind:checked="anchor.done" :class="{'active': id == activeIndex}" @click="scrollTo(anchor.id)">{{ anchor.text }}</a>
          </label>
          <a @click="getResume">Resume</a>
        </div>
      </v-app-bar>
    </div>
</template>

<script>

  export default {
    name: 'NavBar',
    data() {
      return {
        activeColor:String,
        activeIndex: 0,
        anchors: [
          { id: "intro", text: '{E}', done: false },
          { id: "about-me", text: 'About Me', done: false },
          { id: "skills", text: 'Skills', done: false },
          { id: "experience", text: 'Experience', done: false },
          { id: "projects", text: 'Projects', done: false },
          { id: "contact", text: 'Contact', done: false },
        ],
      }
    },
    methods: {
      getResume(){
        window.location.href="https://drive.google.com/file/d/1fvBGqD3hJnDN6iDEfRkdouB8U1rx5rbx/view?usp=sharing"
      },
      
      scrollTo(element) {
        const el = document.querySelector('#' + element);
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      },
      toggle: function(index){
        this.activeIndex = index;
      },
    },
  }
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600&display=swap');

@media (max-width: 900px) {
  a {
    font-size: 15px !important;
    margin-left: 22px  !important;
  }
}

a { 
  color: #fff !important;
  margin-left: 50px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
}

a:hover {
  color: #f2a365 !important;
}
.active{
  color:#f2a365 !important;

}


</style>
