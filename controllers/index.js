// const { addEntry, updateEntry, getEntry, deleteEntry } = require('../use_cases');
const { addEntry } = require('../use_cases');

// const makeDeletePost = require('./delete.post.controller');
// const makeGetPost = require('./get.post.controller');
const makeAddPost = require('./add.post.controller');
// const makeUpdatePost = require('./update.post.controller');
const notFound = require('./not.found.controller');

// const removePost = makeDeletePost({ deleteEntry })
// const getPost = makeGetPost({ getEntry })
const addPost = makeAddPost({ addEntry })
// const updatePost = makeUpdatePost({ updateEntry })

const postController = Object.freeze({
    // removePost,
    // getPost,
    notFound,
    addPost,
    // updatePost
})

// module.exports = postController, { removePost, getPost, addPost, updatePost, notFound }
module.exports = postController, { addPost, notFound }

