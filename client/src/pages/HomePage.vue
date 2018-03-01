<template>
  <div class="">
    <Navbar/>
    <div class="mt-3">
      <div class="row">
        <article-list/>

        <!-- viewport -->
        <div class="list-group col-md-8">
          <a v-for="article in articles" :key="article._id" href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{article.title}}</h5>
              <small>author: {{article.author.name}}</small>
            </div>
            <p class="mb-1">{{article.description}}</p>
            <small>Read More..</small>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ArticleList from '@/components/ArticleList'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Navbar,
    ArticleList
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created: function () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
