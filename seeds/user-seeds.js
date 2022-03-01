const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Brad K',
    email: 'bradK@yahoo.com',
    password: 'password'
  },
  {
    username: 'Dustin',
    email: 'dustin@gmail.com',
    password: 'password'
  },
  {
    username: 'Kevin',
    email: 'kevin@yahoo.com',
    password: 'password'
  },
  {
    username: 'Jeff',
    email: 'jeff@gmail.com',
    password: 'password'
  },
  {
    username: 'dylan',
    email: 'dylan@yahoo.com',
    password: 'password'
  },
  {
    username: 'test1',
    email: 'test1@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test3',
    email: 'test3@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test4',
    email: 'test4@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test5',
    email: 'test5@gmail.com',
    password: 'pw12345'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;