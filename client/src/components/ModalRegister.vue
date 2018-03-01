<template>
  <div class="modal" id="register">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <fieldset>
              <legend>Register</legend>
              <div class="form-group">
                <label>Name</label>
                <input v-model="name"  type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name">
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control" placeholder="Enter Password">
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input v-model="conpass" type="password" class="form-control" placeholder="Enter Password Again">
              </div>
            </fieldset>
          </form>
        </div>
        <div class="modal-footer">
          <button @click="toRegsiter" data-dismiss="modal" type="button" class="btn btn-primary">Register</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      name: null,
      email: null,
      password: null,
      conpass: null
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    toRegsiter () {
      console.log(this.name, this.email, this.conpass)
      if (!this.name || !this.email || !this.password || !this.conpass) {
        alert('field cant be empty!')
        return false
      }
      if (this.password === this.conpass) {
        let payload = {
          name: this.name,
          email: this.email,
          password: this.password,
          conpass: this.conpass
        }
        this.register(payload)
      }
    }
  }
}
</script>

<style lang="css">
</style>
