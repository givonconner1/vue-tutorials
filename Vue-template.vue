<template>
  <div id="vue-frame">
      <div class="navbar-menu">
          <li class="home-btn"><a href="index.html"><img src="https://vignette.wikia.nocookie.net/f1wikia/images/a/a2/Home-button.png/revision/latest?cb=20140408203940" height="35"></a></li>
          <ul>
          <b-dropdown text="Tutorial List">
            <b-dropdown-item href="vue-framework.html">Install Vue.js</b-dropdown-item>
            <b-dropdown-item href="video-js.html">Video.js</b-dropdown-item>
            <b-dropdown-item href="data-bind.html">Data Binding</b-dropdown-item>
          </b-dropdown> 
              <li><a href="about.html">About</a></li>
              <li><a href="help.html">Help</a></li>
          </ul>
      </div>
      <div class="logo">
        <transition name ="fade">
          <h1 v-if="show">{{ msg }}</h1>
        </transition>
      </div>
      <div class="demo">
          <ul>
              <li><button v-on:click="show_start = !show_start; show_demo = false; show_source = false" class="menu-options">Quick-Start</button></li>
              <li><button v-on:click="show_start = false; show_demo = !show_demo; show_source = false"  class="menu-options">Demonstration</button></li>
          </ul>
      </div>
      <div id="test">
          <div id="quickstart" v-if="show_start">
            <h2>Requirements:</h2><br>
            <h4>1.<br>2.<br>3.<br></h4>
            <h2>Write Each Command in a Command Terminal as Seen Below:</h2><br>
            <h4>1. Install Vue</h4>
            $ npm install -g vue-cli
            <br><br>
            <h4>2. Initialize a New Vue Project</h4>
            $ vue init webpack-simple insert-project-name<br>
            $ cd my-project<br>
            $ npm install<br>
            $ npm run dev<br>  
          </div>
          <div id="demonstration"></div>
      </div>
  </div>
</template>
<script>
export default {
   name: 'vue-template',
  data () {
    return {
      msg: 'Vue.js Install Tutorial',
      author: 'Givon Conner',
      version: '1.0.0',
      show: null,
      show_start: false,
      show_demo: false,
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style>
body {
  background: black;
  width: 100%;
  height: 100%;
}
#vue-frame {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #f8f8f8;
  letter-spacing: 1px;
}
#vue-frame .navbar-menu {
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
    align-items: center;
    padding: 5px;
    padding-bottom: 20px;
    margin-right: 60px;
    position: sticky;
}
.navbar-menu a {
    color: white;
}
#vue-frame #quickstart {
    font-size: 13px;
}
#vue-frame #quickstart h2{
    font-size: 24px;
}
#vue-frame #quickstart h4 {
    font-size: 18px;
}
#vue-frame .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1192px;
    position: sticky;
}
#vue-frame .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
}
#vue-frame .logo {
    margin-top: 100px;
    margin-left: 500px;
    display: flex;
}
.demo {
    position: static;
    text-align: left;
    top: 150px;
    margin-left: 610px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}
#vue-frame .menu-options {
  color: #42b983;
  background-color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 15px;
  line-height: 25px;
  border: 1px solid #333;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px #333;
  list-style-type: none;
  text-decoration: none;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 70px;
}
#vue-frame .btn-secondary {
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
#vue-frame .btn-secondary:hover {
    box-shadow: 2px 2px 2px 1px #333;
    border: 1px solid #333;
}
#vue-frame .dropdown-item {
    display: block;
    width: 100%;
    clear: both;
    font-weight: 400;
    color: black;
}

#vue-frame .demo ul li button:hover {
    color: white;
}
#vue-frame #test {
    margin-top: 50px;
    margin-left: 40px;
    text-align: left;
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

