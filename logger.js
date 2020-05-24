const chalk = require('chalk')

class Logger {
  constructor(prefix) {
    this.prefix = prefix
  }

  log() {
    if (this.prefix) {
      console.log(this.prefix, ...arguments)
      return this
    }

    console.log(...arguments)
    return this
  }

  append() {
    process.stdout.write(...arguments)
    return this
  }

  clearLine() {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    return this
  }

  line() {
    console.log(chalk.white('⎽'.repeat(80)))
    return this
  }

  br() {
    console.log()
    return this
  }

  date(message) {
    const date = new Date().toString()
    if (message) {
      console.log(chalk.blue(`${date}: ${message}`))
      return this
    }

    console.log(chalk.blue(date))
    return this
  }
}

module.exports = Logger
