const makeAddComment = require('./create.entry');
// const makeEditComment = require('./update.entry');
// const makeRemoveComment = require('./delete.entry');
// const makeListComments = require('./read.entry');
// TODO DO CHANGE FOR ACTUAL USE CASES
const dataAccess = require('../database/DAL'); // TODO CREATE DATA ACCESS

const addEntry = makeAddComment({ dataAccess })
// const updateEntry = makeEditComment({ dataAccess })
// const getEntry = makeListComments({ dataAccess })
// const deleteEntry = makeRemoveComment({ dataAccess })

const postService = Object.freeze({
    addEntry,
    // updateEntry,
    // getEntry,
    // deleteEntry
})

// module.exports = postService, { addEntry, updateEntry, getEntry, deleteEntry }
module.exports = postService, { addEntry }
