const { signUpController, signInController, getUserController, logOutController } = require('./users');
const { getPosts, getSinglePost, addPost } = require("./posts");
const detailsPage = require("./pages/details");
const getPostComments = require("./comments/getPostComments");
const addComment = require("./comments/addComment");
const getCategories = require("./categories/getCategories");

module.exports = {
    signUpController,
    signInController,
    getUserController,
    logOutController,

    getPosts,
    getSinglePost,
    detailsPage,
    getPostComments,
    addPost,
    addComment,
    getCategories,

}
