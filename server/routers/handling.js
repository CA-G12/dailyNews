const { join } = require('path')
const router = require('express').Router();

// Handle index Page (landingPage 'default')
router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
});

// Handle sign-up Page
router.get('/signup', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'signUp.html'))
});

// Handle sign-in Page
router.get('/signin', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'signIn.html'))
});

// Handle home Page
router.get('/home', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'home.html'))
});

// Handle userInfo in Home Page
router.get(`/user/:id`, (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'home.html'));
});

// Handle Logout Page
router.get('/logout', (req, res) => {
    const { token, id, username, email } = req.cookies;
    res
    .status(200)
    .clearCookie('token', token)
    .clearCookie('id', id)
    .clearCookie('username', username)
    .clearCookie('email', email)
    .redirect('/');
});


module.exports = router;