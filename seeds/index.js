const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('sequelize sync --------------');

  await seedUsers();
  console.log('seedUsers --------------');

  await seedPosts();
  console.log('seedPosts --------------');

  await seedComments();
  console.log('seedComments --------------');

  await seedVotes();
  console.log('seedVotes --------------');

  process.exit(0);
};

seedAll();
