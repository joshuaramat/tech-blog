const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('SEQUELIZE--------------');
  await seedUsers();
  console.log('USERS--------------');

  await seedPosts();
  console.log('POSTS--------------');

  await seedComments();
  console.log('COMMENTS--------------');

  await seedVotes();
  console.log('VOTES--------------');

  process.exit(0);
};

seedAll().catch(err => console.log('seedAll error: ', err));
