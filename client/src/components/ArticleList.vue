<template>
  <div class="col-md-3">
    <div class="list-group">

      <a class="list-group-item list-group-item-action active" style="color: white">
        Category
      </a>
      <a @click="getCategory('all')" class="list-group-item list-group-item-action">
        All Category
      </a>
      <a @click="getCategory('game')" class="list-group-item list-group-item-action">
        Game
      </a>
      <a @click="getCategory('horror')" class="list-group-item list-group-item-action">
        Horror
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      category: null
    }
  },
  methods: {
    ...mapActions([
      'getAllCategory',
      'getAllArticles'
    ]),
    getCategory (cat) {
      this.category = cat
      if (this.category === 'all') {
        this.getAllArticles()
      } else {
        console.log(this.category)
        this.getAllCategory(this.category)
      }
    }

  }
}
</script>

<style lang="css">
</style>
