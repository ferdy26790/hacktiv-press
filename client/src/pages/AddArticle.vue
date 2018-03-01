<template>
  <div class="">
    <Navbar/>
      <div class="container">
        <form>
  <fieldset>
    <legend>ADD ARTICLE</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">Title</label>
      <input v-model="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Description</label>
      <textarea v-model="description" class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleSelect1">Category</label>
      <select v-model="category" class="form-control" id="exampleSelect1">
        <option value="game">Game</option>
        <option value="horror">Horror</option>
      </select>
    </div>
    <button @click="toAddArticle" type="button" class="btn btn-primary">Add</button>
  </fieldset>
</form>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: null,
      description: null,
      category: null
    }
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions([
      'addArticle'
    ]),
    toAddArticle () {
      if (!localStorage.getItem('token')) {
        alert('please login first!')
        return false
      }
      let payload = {
        title: this.title,
        description: this.description,
        category: this.category
      }
      console.log(payload)
      this.addArticle(payload)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
