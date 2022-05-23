const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
  console.log('SEQUELIZE--------------');
  }
  catch (error) {
    console.error(error);
  }

  try {
    await seedUsers();
  console.log('USERS--------------');
  } catch (error) {
    console.error(error);
  }

  try {
    await seedPosts();
    console.log('POSTS--------------');
  } catch (error) {
    console.error(error);
  }

  try {
    await seedComments();
    console.log('COMMENTS--------------');
  } catch (error) {
    console.error(error);
  }
  
  try {
    await seedVotes();
    console.log('VOTES--------------');
  } catch (error) {
    console.error(error);
  }

  process.exit(0);
};

seedAll();
