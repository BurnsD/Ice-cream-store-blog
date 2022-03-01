const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I really like vanilla ice cream the best',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Rocky Road is my favorite',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Chocolate chip cookie dough is the bomb',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I hate mint chocolate chip',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I love toffee flavored ice cream the most.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I hate all coffee flavored ice creams',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'I think this post is right on the money',
    user_id: 9,
    post_id: 13
  },
  {
    comment_text: 'I agree completely.  This is the best post ever.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'I totally agree with this post.  You are so smart.',
    user_id: 9,
    post_id: 2
  },
  {
    comment_text: 'This is the dumbest post ever.  You are an idiot.',
    user_id: 8,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;