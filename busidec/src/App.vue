<template>
  <div id="app">
     <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div  class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link">
                    <i class="fa fa-home fa-3x clickable" aria-hidden="true"></i> BusiDec
                  </a>
                </li>
              </ul>
              <ul>
                <li class="nav-item">
                  <a class="nav-link" v-on:click="showLoginForm()">
                    <i class="fa fa-user-circle fa-3x clickable" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <login v-if="showModalLogin" v-on:close="closeLoginForm">
          </login>
  </div>
</template>

<script>
import Login from './views/login/Login.vue'
export default {
  name: 'app',
  components: {
    Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModalLogin: false
    }
  },
  methods: {
    showLoginForm: function() {
      console.log('show login form');
      this.showModalLogin = true;
    },
    closeLoginForm: function(loginInfo) {
      console.log('close login form ' + loginInfo);
      this.showModalLogin = false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  cursor: pointer;
}
</style>
