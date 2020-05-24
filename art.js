const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const artFile = path.join(__dirname, 'ascii-art.txt')
const art = fs.readFileSync(artFile, 'utf8')
console.log(chalk.white(art))
