<template>
  <div id="help">
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
          <h2 v-if="show">
              {{ msg }}
              <br><br><h3>Well What Can I Help You With?</h3>
          </h2>

        </transition>
      </div>

  </div>
</template>
<script>
export default {
   name: 'help-vue',
  data () {
    return {
      msg: 'Help!',
      author: 'Givon Conner',
      version: '1.0.0',
      show: null,
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style>
#help {
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
#help .navbar-menu a {
    color: white;
}
#help .home-btn {
    border: 2px solid #333;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #333;
    margin-right: 1253px;
}
#help .home-btn:hover {
    border: 2px solid gray;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px #333;
}
#help .logo {
    position: relative;
    top: 100px;
}
#help .btn-secondary {
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
#help .btn-secondary:hover {
    box-shadow: 2px 2px 2px 1px #333;
    border: 1px solid #333;
}
#help .dropdown-item {
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

