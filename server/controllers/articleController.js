const jwt = require('jsonwebtoken')
const articleModel = require('../models/Article')
const getDecode = require('../helpers/getDecode')

class Article {
  static getArticles (req, res) {
    articleModel.find()
    .then((articles) => {
      res.status(200).json({
        articles: articles
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  }
  static getArticle (req, res) {
    articleModel.findById(req.params.id)
      .then((article) => {
        res.status(200).json({
          article: article
        })
      }).catch((err) => {
        res.status(500).send(err)
      })
  }
  static addArticle (req, res) {
    getDecode(req.headers.token)
      .then((decode) => {
        let newArticle = new articleModel({
          title: req.body.title,
          description: req.body.description,
          category: req.body.category,
          author: decode.id
        })
      }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static removeArticle (req, res) {
    getDecode(req.headers.token)
      .then((decode) => {
        articleModel.findById(req.params.id)
          .then((article) => {
            if (article.author == decode.id) {
              articleModel.findByIdAndRemove(req.params.id)
                .then((articleDeleted) => {
                  res.status(200).json({
                    msg: "article deleted",
                    article: articleDeleted
                  })
                }).catch((err) => {
                  res.status(500).send(err)
                })
            } else {
              console.log(err)
              res.status(403).send('forbidden')
            }
          }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
          })
      }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static editArticle (req, res) {
    getDecode(req.headers.token)
      .then((decode) => {
        articleModel.findById(req.params.id)
          .then((article) => {
            if (article.author == decode.id) {
              article.title = req.body.title || article.title
              article.description = req.body.description || article.description
              article.category = req.body.category || article.category
              article.save()
                .then((articleSaved) => {
                  res.status(200).json({
                    msg: "article deleted",
                    article: articleSaved
                  })
                }).catch((err) => {
                  console.log(err)
                  res.status(500).send(err)
                })
            }
          }).catch(() => {

          })
      }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
}
