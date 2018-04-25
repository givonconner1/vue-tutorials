<template>
  <div id="app">
    <div id="new">
      <transition name ="fade">
        <p v-if="show"><a href="#"><img src="./assets/logo.png"></a></p>
      </transition>
      <transition name = "fade1">
        <h1 v-if="show"><b>{{ msg }}</b></h1>
      </transition>
      <div id="navbar-menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <b-dropdown id="ddown1" text="Tutorial List" class="m-md-2">
            <b-dropdown-item href="vue-framework.html">Install Vue.js</b-dropdown-item>
            <b-dropdown-item href="video-js.html">Video.js</b-dropdown-item>
            <b-dropdown-item href="data-bind.html">Data Binding</b-dropdown-item>
          </b-dropdown>      
          <li><a href="about.html">About</a></li>
          <li><a href="help.html">Help</a></li>
        </ul>
      </div>
    </div>
      <div id="new">
        <a id="try-it">
          <h4 id="created-by" v-if="show">Created by:</h4>
          <h3 id="author-name" v-if="show"><b>{{ author }}</b></h3>
          <p id="version">v{{ version }}</p>
        </a>
      </div>
  </div>     
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  name: 'new',
  data () {
    return {
      msg: 'VUE.JS TUTORIALS',
      author: 'Givon Conner',
      version: '1.0.0',
      show: null,
      counter2: 0
    }
  },
  mounted() {
    this.show = true;
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 90px;
  text-align: center;
  color: #f8f8f8;
  background: black;
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}

#navbar-menu {
  background: black;
  text-align: center;
  margin: 20px;
  margin-left: 20px;
}

#navbar-menu ul li {
  display: inline;
  margin-right: 5px;
  margin-left: 5px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #333;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px #333;
}
#navbar-menu ul li a {
  list-style-type: none;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 1px;
}

#navbar-menu ul li a:hover {
  color:rgb(252, 252, 252);
}

#navbar-menu li:nth-of-type(odd)
{
  position: relative;
  z-index: 1;
  top: -25px;
}
#navbar-menu li:nth-of-type(even)
{
  position: relative;
  z-index: 1;
  top: -15px;
}

#new {
  font-size: 20px;
  padding-top: 55px;
}

#created-by {
  padding-top: 175px;
  margin-bottom: 0;
}

#author-name {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 0;
  margin-bottom: 0;
}

#version {
  text-align: right;
  padding-right: 10px;
}
#ddown1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.fade-enter-active , .fade-leave-active {
  transition: opacity 4s;
}

.fade-enter , .fade-leave-to {
  opacity: 0;
}

.fade1-enter-active , .fade-leave-active {
  transition: opacity 6s;
}

.fade1-enter , .fade-leave-to {
  opacity: 0;
}

.btn-secondary {
  color: #42b983;
  background-color: rgb(0, 0, 0);
  display: inline;
  margin-right: 5px;
  margin-left: 5px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #333;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0px;
  padding-bottom: 2px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px #333;
  list-style-type: none;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 1px;
}

#try-it {
  text-decoration: none;
  list-style-type: none;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
