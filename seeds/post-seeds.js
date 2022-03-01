const { Post } = require('../models');

const postdata = [
  {
    title: 'Vanilla ice cream is the post',
    post_content: 'I like vanilla ice cream because it is perfect.',
    user_id: 1
  },
  {
    title: 'I hate vanilla ice cream.',
    post_content: 'Vanilla ice cream is boring.',
    user_id: 2
  },
  {
    title: 'Every ice cream store should sell Rocky Road',
    post_content: 'Rocky Road is my favorite.',
    user_id: 3
  },
  {
    title: 'Stay away from all coffee ice creams',
    post_content: 'I would rather eat sherbert than coffer flavored ice cream',
    user_id: 4
  },
  {
    title: 'I prefer custard over ice cream',
    post_content: 'Custard is so much better than ice cream.',
    user_id: 5
  },
  {
    title: 'Bubblegum ice cream',
    post_content: 'Bubblegam ice cream is my favorite from my childhood',
    user_id: 1
  },
  {
    title: 'Mixins',
    post_content: 'I like ice cream stores that do mixins.',
    user_id: 1
  },
  {
    title: 'No nuts',
    post_content: 'I am deathly alergic to nuts and cannot visit your store if you serve them.  Sorry.',
    user_id: 1
  },
  {
    title: 'Dots',
    post_content: 'Dots are not real ice cream and should be avoided.',
    user_id: 1
  },
  {
    title: 'Milkshakes',
    post_content: 'I really hope you guys serve milkshakes.  Strawberry is my favorite.',
    user_id: 2
  },
  {
    title: 'Candy too?',
    post_content: 'Will you all sell candy or just ice cream?',
    user_id: 2
  },
  {
    title: 'Chocolate chip cookie dough',
    post_content: 'There is no better ice cream than chocolate chip cookie dough.',
    user_id: 3
  },
  {
    title: 'I hate ice cream',
    post_content: 'I will never buy any ice cream.  Ever.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;