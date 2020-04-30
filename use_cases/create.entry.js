// INSERT HERE IF HAVE BUSSINES LOGIC 

module.exports = makeAddPost = ({ dataAccess }) => {
  return async function addPost (data) {
      // VALIDATE DATA
      console.log(data);
    return dataAccess.insert({
      author: data.author,
      createdOn: Date.now(),
      id: null, // should I need to generate the uuid here?
      modifiedOn: null,
      postId: null, // should I need to generate the uuid here?,
      source: {
        ip: data.source.ip,
        browser: data.source.browser
      },
      text: data.text,
    })
  }
}
