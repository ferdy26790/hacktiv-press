<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a data-target="#register" data-toggle="modal" class="nav-link" href="#">Register</a>
        </li>
      </ul>
      <form v-if="!isLogin" class="form-inline my-2 my-lg-0">
        <label for="">EMAIL</label>
        <input v-model="email" class="form-control mr-sm-2" type="text" placeholder="enter your email">
        <label for="">Password</label>
        <input v-model="password" class="form-control mr-sm-2" type="text" placeholder="enter your password">
      </form>
        <button v-if="!isLogin" @click="toLogin" class="btn btn-secondary my-2 my-sm-0" type="button">Login</button>
      <p v-if="isLogin">WELCOME</p>

      <button v-if="isLogin" @click="logout" class="btn btn-secondary my-2 my-sm-0" type="button">Logout</button>
    </div>
    <!-- modal -->
    <modal-register/>
  </nav>
  <!-- end navbar -->
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import ModalRegister from '@/components/ModalRegister'
export default {
  components: {
    ModalRegister
  },
  name: 'hello',
  computed: {
    ...mapState([
      'user',
      'isLogin'
    ])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    ...mapMutations([
      'emptyUser'
    ]),
    toLogin () {
      if (!this.email || !this.password) {
        alert('check your field!')
        return false
      }
      let payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
    },
    logout () {
      localStorage.removeItem('token')
      this.emptyUser()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
