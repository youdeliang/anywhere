module.exports = (totalSize, req, res) => {
  const range = req.headers['range']
  if (!range) {
    return { code: '200' }
  }
  const size = range.match(/bytes=(\d*)-(\d*)/)
  const end = size[2] || totalSize - 1
  const start = size[1] || totalSize - end
  if (start > end || start < 0 || end > totalSize) {
    return { code: '200' }
  }
  res.setHeader('Accept-Rangs', 'bytes')
  res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`)
  res.setHeader('Content-Length', end - start)
  return {
    code: '206',
    start: parseInt(start),
    end: parseInt(end)
  }
}