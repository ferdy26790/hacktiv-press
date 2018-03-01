var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var articleController = require('../controllers/articleController')
/* GET users listing. */
router.get('/', userController.getUsers)
router.get('/articles', articleController.getArticles)
router.post('/articles', articleController.addArticle)
router.get('/articles/category/:category', articleController.getArticlesByCategory)
router.get('/articles/:id', articleController.getArticle)
router.put('/articles/:id', articleController.editArticle)
router.delete('/articles/:id', articleController.removeArticle)
router.get('/:id', userController.getUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;
