<template>
  <div id="about">
      <div class="navbar-menu">
          <li class="home-btn"><a href="index.html"><img src="https://vignette.wikia.nocookie.net/f1wikia/images/a/a2/Home-button.png/revision/latest?cb=20140408203940" height="35"></a></li>
          <ul>
          <b-dropdown text="Tutorial List">
            <b-dropdown-item href="vue-framework.html">Structure of Vue<br>Framework</b-dropdown-item>
            <b-dropdown-item href="video-js.html">Video.js</b-dropdown-item>
            <b-dropdown-item href="data-bind.html">Data Binding</b-dropdown-item>
          </b-dropdown> 
              <li><a href="about.html">About</a></li>
              <li><a href="help.html">Help</a></li>
          </ul>
      </div>
      <div class="logo">
        <transition name ="fade">
          <h2 id="about-content" v-if="show">{{ msg }}</h2>
        </transition>
      </div>
        <div id="about-content">
            <p>...Created by <b><i>Givon Conner</i></b> in 2018 as a Web Developer Student Assistant for UNT's Administrative IT Services,<br>"Vue.js Tutorials" was created to
               assist the full-time Web-Developers in better understanding the Vue.js framework.
            </p>
        </div>
        <h2 id="about-content">Current Tutorials</h2>
        <ul id="about-content">
            <li v-for="item in features">
                {{item.feature}}
            </li>
        </ul>
  </div>
</template>
<script>
export default {
   name: 'about-vue',
  data () {
    return {
      msg: 'About',
      features: [
          { feature: 'Data-Bind'},
          { feature: 'Video.js'},
          { feature: 'Vue Framework Structure'},
      ],  
      author: 'Givon Conner',
      version: '1.0.0',
      show: null,
    }
  },
  mounted() {
    this.show = true;
  },
}
</script>

<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #f8f8f8;
  background: black;
  position: absolute;
  width: 100%;
  height: 100%;
  letter-spacing: 1px;
}
.navbar-menu {
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
    align-items: center;
    padding: 5px;
    padding-bottom: 20px;
    
}
.navbar-menu a {
    color: white;
}
#about .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
}
#about .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
}
#about .logo {
    position: sticky;
    top: 100px;
}
#about-content {
    margin-top: 75px;
    margin-left: 20px;
    margin-bottom: 37.5px;
    text-align: left;
}
#about .btn-secondary {
  color: white;
  background-color: rgb(0, 0, 0);
  display: inline;
  line-height: 25px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 1px black;
  padding: 0px;
  list-style-type: none;
  text-decoration: none;
  letter-spacing: 1px;
}
#about .btn-secondary:hover {
    box-shadow: 2px 2px 2px 1px #333;
    border: 1px solid #333;
}
#about .dropdown-item {
    display: block;
    width: 100%;
    clear: both;
    font-weight: 400;
    color: black;
}
.fade-enter-active , .fade-leave-active {
  transition: opacity 3s;
}

.fade-enter , .fade-leave-to {
  opacity: 0;
}
ul {
    margin: 0;
}
h1 {
    font-size: 60px;
}

</style>

