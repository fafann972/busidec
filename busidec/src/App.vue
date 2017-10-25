<template>
  <div id="app">
     <nav class="navbar sticky-top navbar-expand-lg navbar-dark" >
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
          <login v-if="showModalLogin" v-on:close="closeLoginForm"></login>
          <home-user v-if="infoUser.isConnected" v-bind:user="infoUser"></home-user>
  </div>
</template>

<script>
import Login from './components/login/Login.vue'
import HomeUser from './components/home/HomeUser.vue'
export default {
  name: 'app',
  components: {
    'login': Login,
    'home-user': HomeUser
  },
  data () {
    return {
      showModalLogin: false,
      infoUser: {
        id: '',
        first_name: '',
        role: '',
        isConnected: false
      }
    }
  },
  methods: {
    showLoginForm: function() {
      console.log('show login form');
      this.showModalLogin = true;
    },
    closeLoginForm: function(user) {
      console.log('close login form ' + user);
      this.showModalLogin = false;

      if (user != null) {
        user.then(value => {
          console.log('Welcome ' + value._source.first_name);
          this.infoUser.id = value._id;
          this.infoUser.first_name = value._source.first_name;
          this.infoUser.role = value._source.role;
          this.infoUser.isConnected = true;
        });
      }

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

nav {
  background-color: darkcyan;
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
