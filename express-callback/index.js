module.exports = makeExpressCallback = (controller) => {
  return async (req, res) => {

    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        'User-Agent': req.get('User-Agent')
      }
    }
    try {
      const response = await controller(httpRequest);
      if (response.headers) {
        res.set(response.headers);
      }
      res.type('json')
      res.status(response.statusCode).send(response.body);
    } catch (err) {
      res.status(500).send({ error: 'An unkown error occurred.' })
    }

  }
}
