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
              <li><button v-on:click="show_steps = !show_steps; show_demo = false; show_source = false" class="menu-options">Step-by-Step</button></li>
              <li><button v-on:click="show_steps = false; show_demo = false; show_source = !show_source"  class="menu-options">Source Code</button></li>
          </ul>
      </div>
      <div id="overview">
<h2>Quickstart</h2>
<br>
1.  npm install -g @vue/cli<br>
# or<br>
yarn global add @vue/cli<br>
2.  vue create my-project<br>
<br>
## Build Setup
<br>
``` bash
<br>
# install dependencies
<br>
npm install
<br>
# serve with hot reload at localhost:8080
<br>
npm run dev
<br>
# build for production with minification
1.  npm install -g @vue/cli<br>
# or<br>
yarn global add @vue/cli<br>
2.  vue create my-project<br>
      </div>
      <div id="test">
          <p v-if="show_steps">Testing Steps</p>
          <p v-if="show_source">Testing Source Code</p>
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
      show_steps: false,
      show_source: false,
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
}
.navbar-menu a {
    color: white;
}
#vue-frame .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1180px;
}
#overview {
    font-size: 13px;
}
#vue-frame .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1235px;
}
.logo {
    position: static;
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
#vue-frame .menu-options {
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
  margin-left: 30px;
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

#vue-frame #overview {
    margin-top: 200px;
    margin-left: 40px;
    text-align: left;
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

