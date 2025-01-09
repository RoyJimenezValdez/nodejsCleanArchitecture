const express = require('express');
const bodyParser = require('body-parser');
const {
    deleteComment,
    getComments,
    notFound,
    addPost,
    patchComment
} = require('./controllers');
const makeCallback = require('./express-callback');

const app = express()
app.use(bodyParser.json())

app.post(`/posts`, makeCallback(addPost))
// app.delete(`${apiRoot}/comments/:id`, makeCallback(deleteComment))
// app.delete(`${apiRoot}/comments`, makeCallback(deleteComment))
// app.patch(`${apiRoot}/comments/:id`, makeCallback(patchComment))
// app.patch(`${apiRoot}/comments`, makeCallback(patchComment))
// app.get(`${apiRoot}/comments`, makeCallback(getComments))  
app.use(makeCallback(notFound))

// DEPLOY 
// SERVER
// V1
// with slack
// TEST 3

// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})


module.exports = app
