module.exports = makeAddPost = ({ addEntry }) => {
    return addPost = async (httpRequest) => {
      try {
        const { source = {}, ...postInfo } = httpRequest.body
        source.ip = httpRequest.ip
        source.browser = httpRequest.headers['User-Agent']
        if (httpRequest.headers['Referer']) {
          source.referrer = httpRequest.headers['Referer']
        }

        const posted = await addEntry({
          ...postInfo,
          source
        })
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 201,
          body: { posted }
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
  
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  