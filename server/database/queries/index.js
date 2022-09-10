const { getSignUpQuery, getSignInQuery, getUserQuery } = require('./users');

const getPostsQuery = require("./posts/getPostsQuery");
const addPostQuery = require("./posts/addPostQuery");
const getSinglePostQuery = require("./posts/getSinglePostQuery");
const getPostCommentsQuery = require("./comments/getPostCommentsQuery");
const addCommentQuery = require("./comments/addCommentQuery");
const getCategoriesQuery = require("./categories/getCategoriesQuery");

module.exports = {
    getSignUpQuery, 
    getSignInQuery,
    getUserQuery,

    getPostsQuery,
    getSinglePostQuery,
    getPostCommentsQuery,
    addPostQuery,
    addCommentQuery,
    getCategoriesQuery,
}
