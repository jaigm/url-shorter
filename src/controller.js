const urlShorter = require('src/url-shorter')

/**
 * @param req {Request}
 * @param res {Response}
 */
const getShorten = (req, res) => {
  const resolved = urlShorter(req.query.text);

  if (resolved.isUrl) {
    return res.send(resolved)
  }

  return res.redirect(resolved.result)
}

module.exports = {
  getShorten
}
