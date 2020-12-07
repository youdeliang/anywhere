const { exec } = require('child_process')

module.exports = url => {
  // eslint-disable-next-line no-undef
  switch (process.platform) {
    case 'drawin':
      exec(`open ${url}`)
      break
    case 'win32':
      exec(`start ${url}`)
      break
  }
}