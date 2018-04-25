<template>
  <div id="video-js">
      <div class="navbar-menu">
          <li class="home-btn"><a href="index.html"><img src="https://vignette.wikia.nocookie.net/f1wikia/images/a/a2/Home-button.png/revision/latest?cb=20140408203940" height="35"></a></li>
          <ul>
          <b-dropdown text="Tutorial List">
            <b-dropdown-item href="vue-framework.html">Install Vue.js</b-dropdown-item>
            <b-dropdown-item href="video-js.html">Video.js</b-dropdown-item>
            <b-dropdown-item href="data-bind.html">Data Binding</b-dropdown-item>
          </b-dropdown> 
              <li><a href="about.html">About</a></li>
              <li><a href="about.html">Help</a></li>
          </ul>
      </div>
      <div class="logo">
        <transition name ="fade">
          <h1 v-if="show_title">{{ msg }}</h1>
        </transition>
      </div>
      <div class="demo">
          <ul>
              <li><button v-on:click="show_steps = !show_steps; show_demo = false; show_source = false" class="menu-options">Step-by-Step</button></li>
              <li><button v-on:click="show_steps = false; show_demo = !show_demo; show_source = false"  class="menu-options">Demo</button></li>
              <li><button v-on:click="show_steps = false; show_demo = false; show_source = !show_source"  class="menu-options">Source Code</button></li>
          </ul>
      </div>
      <div id="test">
          <p v-if="show_steps">Testing Steps</p>
          <p v-if="show_demo">Testing Demo</p>
          <p v-if="show_source">Testing Source Code</p>
      </div>
  </div>
</template>
<script>
export default {
   name: 'video-js',
  data () {
    return {
      msg: 'Video.js Tutorial',
      author: 'Givon Conner',
      version: '1.0.0',
      show_title: null,
      show_steps: false,
      show_demo: null,
      show_source: null,
      counter: 0,
    }
  },
  mounted() {
    this.show_title = true;
  }
}
</script>

<style>

#video-js #test {
    margin-top: 200px;
    margin-left: 40px;
    text-align: left;
}
#video-js {
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
#video-js .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
}
#video-js .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
}
#video-js .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
} .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
}
.logo {
    position: relative;
    top: 100px;
}
.demo {
    position: relative;
    text-align: left;
    top: 150px;
    margin-left: 610px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}
.menu-options {
  color: #42b983;
  background-color: rgb(0, 0, 0);
  display: inline;
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
}
#video-js .btn-secondary {
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
#video-js .btn-secondary:hover {
    box-shadow: 2px 2px 2px 1px #333;
    border: 1px solid #333;
}
#video-js .dropdown-item {
    display: block;
    width: 100%;
    clear: both;
    font-weight: 400;
    color: black;
}

.demo ul li button:hover {
    color: white;
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

