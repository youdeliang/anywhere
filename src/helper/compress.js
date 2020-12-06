const { createGzip, createDeflate } = require('zlib')

module.exports = (rs, req, res) => {
  const acceptEncoding = req.headers['accept-encoding']
  if (!acceptEncoding || !acceptEncoding.match(/\b(gaip|deflate)\b/)) {
    return rs
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    res.setHeader('Content-Encoding', 'gzip')
    return rs.pipe(createGzip())
  } else if (acceptEncoding.match(/\bdefalte\b/)) {
    res.setHeader('Content-Encoding', 'deflate')
    return rs.pipe(createDeflate())
  }
}