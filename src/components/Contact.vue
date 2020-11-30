<template>
  <v-main class="contact" id="contact">
    <v-container>
      <h3>
        Contact
      </h3>
      <v-container>
        <h4 class="content-contact">For any inquiries,feel free to contact me at</h4>
        <v-row>
          <a v-clipboard="link" class="email">{{ link }}<v-icon class="copy-icon">mdi-content-copy</v-icon> </a>
        </v-row>
        <h4 class="content-contact-two">You can also visit my
          <a class="linkedin" @click="goToLinkedin">LinkedIn</a>
          <span class="and"> and</span>
          <a class="github" @click="goToGithub"> GitHub</a>
          <span class="pages"> pages.</span>
        </h4>
        
      </v-container>
    </v-container>
    <v-app-bar>
      <h2 class="author">
        © 2020 Elad Abramov
        <h2 class="designer">Designed by
          <span class="name">
            Elad Abramov
          </span>
        </h2>
      </h2>
      <div class="socails">
        <a @click="goToLinkedin" class="linkedin-anchor"></a>
        <a @click="goToGithub" class="github-anchor"></a>
      </div>
  </v-app-bar>
  </v-main>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      link: 'eladsoftware20@gmail.com'
    }

  },
  methods: {
    goToLinkedin(){
      window.open("https://www.linkedin.com/in/elad-abramov-427b97133/", "_blank");
    },
     goToGithub(){
      window.open("https://github.com/EladAbramov", "_blank");
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');
.contact {
  background-color: #30475E;
  height: 650px;
}

@media (max-width: 900px) {
  h4{
    margin: 0px 0px 0px 0px !important;
  }
  .email {
    margin: 0px 0px 0px 10px !important;
  }
  .author {
    margin-left: 10px!important;
    margin-top: 50px!important;
  }
  
  .linkedin-anchor {
    margin-left: 0px !important;
  }
}

h3 {
  line-height: 1.15;
  font-size: 60px;
  color: #f2a365;
  font-family: 'Courier New', Courier, monospace;
  top: 150px;
  margin: 50px 120px 50px;
}

.content-contact {
  margin: 0 110px 0;
  font-size: 30px; 
  color: #fff;
  font-family: 'Fira Mono', sans-serif;
}

.email {
  line-height: 1.15;
  font-size: 30px;
  font-family: 'Fira Mono', sans-serif;
  cursor: pointer;
  color: #f2a365 !important;
  margin: 0 122px 0;
}

.copy-icon {
  left: 20px;
    color: #f2a365 !important;

}

.content-contact-two {
  margin: 0 110px 0;
  font-size: 30px; 
  color: #fff;
  font-family: 'Fira Mono', sans-serif;
}

.linkedin{
  line-height: 1.15;
  font-size: 30px;
  font-family: 'Fira Mono', sans-serif;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
  color: #f2a365 !important;
  text-decoration: none;
  margin: 0px 0px 0px 0px;

}
.github{
  line-height: 1.15;
  font-size: 30px;
  font-family: 'Fira Mono', sans-serif;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
  color: #f2a365 !important;
  text-decoration: none;
  margin: 0px 0px 0px 0px;
}
h4{
  margin: 0 120px 0;
  font-size: 35px; 
  color: #fff;
  font-family: 'Fira Mono', sans-serif;
}

.and {
  font-size: 30px; 
  color: #fff;
  font-family: 'Fira Mono', sans-serif;
}

.pages {
  font-size: 30px; 
  color: #fff;
  font-family: 'Fira Mono', sans-serif;
}


.v-app-bar {
  top: 150px;
  line-height: 1.15;
  height: 105px !important;
  background-color: #222831 !important;
  display: flex;
  flex-direction: row;

}

.author {
  margin-left: 240px;
  margin-top: 30px;
  color: white;
  line-height: 1.15;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: #eee;
  white-space: nowrap;
}

.designer {
  left: 200px;
  line-height: 1.15;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: #eee;
  white-space: initial
}

.name {
  color:#f2a365 !important;
  font-size: 24px;

}
.socails {
  line-height: 1.15;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
}

.linkedin-anchor {
  color: #fff;
  margin-top: 30px;
  line-height: 1.15;
  background: url("data:image/svg+xml,%3Csvg id='LinkedIN' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cpath id='Path_1' data-name='Path 1' d='M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0ZM9.6,16.565h4.532V30.183H9.6V16.565Zm4.831-4.213A2.354,2.354,0,0,0,11.9,10a2.36,2.36,0,1,0-.059,4.706h.029A2.364,2.364,0,0,0,14.432,12.352Zm10.828,3.892c2.983,0,5.218,1.947,5.218,6.13v7.808H25.947V22.9c0-1.83-.656-3.079-2.3-3.079a2.48,2.48,0,0,0-2.326,1.655,3.092,3.092,0,0,0-.15,1.1v7.606H16.642s.06-12.34,0-13.618h4.533v1.929a4.5,4.5,0,0,1,4.085-2.249Z' fill='%23eee' fill-rule='evenodd'/%3E %3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
  margin-left: 350px;
  cursor: pointer;
}
.github-anchor {
  margin-top: 30px;
  line-height: 1.15;
  background: url("data:image/svg+xml,%3Csvg id='Github' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cpath id='Path_67' data-name='Path 67' d='M20,0A20.259,20.259,0,0,0,0,20.507,20.472,20.472,0,0,0,13.677,39.965c1,.189,1.367-.445,1.367-.987,0-.489-.019-2.1-.028-3.818-5.564,1.24-6.738-2.42-6.738-2.42a5.4,5.4,0,0,0-2.221-3c-1.814-1.273.137-1.247.137-1.247a4.215,4.215,0,0,1,3.066,2.113c1.783,3.135,4.678,2.229,5.82,1.705A4.408,4.408,0,0,1,16.35,29.57c-4.442-.519-9.112-2.278-9.112-10.135a8.048,8.048,0,0,1,2.061-5.5A7.537,7.537,0,0,1,9.492,8.5s1.68-.551,5.5,2.1a18.521,18.521,0,0,1,10.017,0C28.828,7.953,30.5,8.5,30.5,8.5a7.533,7.533,0,0,1,.2,5.427,8.03,8.03,0,0,1,2.058,5.5c0,7.877-4.678,9.611-9.132,10.118a4.968,4.968,0,0,1,1.357,3.8c0,2.743-.022,4.952-.022,5.627,0,.546.36,1.185,1.373.983A20.469,20.469,0,0,0,40,20.507,20.258,20.258,0,0,0,20,0' fill='%23ececec'/%3E %3Cpath id='Path_68' data-name='Path 68' d='M9.054,35.093a.249.249,0,0,1-.342.063c-.145-.067-.227-.2-.179-.305s.2-.133.343-.063.227.205.177.306' transform='translate(-1.42 -5.792)' fill='%23ececec'/%3E %3Cpath id='Path_69' data-name='Path 69' d='M10.025,36.15c-.094.09-.281.048-.407-.094a.313.313,0,0,1-.058-.422c.1-.09.278-.048.409.094s.156.331.057.422' transform='translate(-1.584 -5.931)' fill='%23ececec'/%3E %3Cpath id='Path_70' data-name='Path 70' d='M10.968,37.527c-.122.087-.322.006-.446-.175s-.122-.4,0-.483.321-.009.446.17a.363.363,0,0,1,0,.488' transform='translate(-1.738 -6.139)' fill='%23ececec'/%3E %3Cpath id='Path_71' data-name='Path 71' d='M12.233,38.888c-.109.122-.343.09-.513-.077a.394.394,0,0,1-.113-.519c.111-.123.345-.088.517.077s.227.4.11.519' transform='translate(-1.925 -6.37)' fill='%23ececec'/%3E %3Cpath id='Path_72' data-name='Path 72' d='M13.987,39.721c-.048.158-.273.231-.5.163s-.373-.256-.328-.417.273-.236.5-.163.374.254.327.417' transform='translate(-2.192 -6.546)' fill='%23ececec'/%3E %3Cpath id='Path_73' data-name='Path 73' d='M15.943,39.9c.006.167-.186.307-.423.309s-.432-.13-.434-.294.188-.307.426-.311.432.129.432.3' transform='translate(-2.514 -6.6)' fill='%23ececec'/%3E %3Cpath id='Path_74' data-name='Path 74' d='M17.77,39.593c.028.162-.138.331-.373.375s-.447-.058-.476-.22.139-.335.37-.378.448.057.477.222' transform='translate(-2.82 -6.56)' fill='%23ececec'/%3E %3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
  margin-left: 50px;
  cursor: pointer;
}
.linkedin-anchor:hover {
  background-color: #f2a365 !important;
}
.github-anchor:hover {
  background-color: #f2a365 !important;
}

</style>