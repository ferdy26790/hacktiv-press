var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const aritcleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'missing title']
  },
  description: {
    type: String,
    required: [true, 'missing description']
  },
  category: {
    type: String,
    requred: [true, 'missing category']
  }

})

const Article = mongoose.model('Article', aritcleSchema)

module.exports = Article;
