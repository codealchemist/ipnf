#!/usr/bin/env node
const isReachable = require('is-reachable')
const getIpRange = require('get-ip-range')
const async = require('async')
const chalk = require('chalk')
const Logger = require('./logger')
const { args, flags } = require('./args')
require('./art')

const logger = new Logger()
logger
  .log(`💻 🌎 🔍 ${chalk.blue('IP NODE FINDER')}`)
  .date()
  .line()

const { ranges, port, path, timeout } = flags
if (!ranges) {
  args.showHelp()
  process.exit()
}

logger
  .br()
  .log(chalk.white('〜 RANGES:'), ranges)
  .log(chalk.white('⠰  PORT:'), port)
  .log(chalk.white('∕  PATH:'), path)
  .log(chalk.white('T  TIMEOUT:'), timeout)

init()

function init() {
  const ipRanges = flags.ranges.split(',')
  async.eachSeries(ipRanges, scanRange, () => {
    logger.log('DONE.').br()
    process.exit()
  })
}

async function scanRange(range) {
  logger.br().log(`🌎 Scanning RANGE: ${range}`)
  const ips = getIpRange(range)

  return async.eachSeries(ips, scanIp)
}

async function scanIp(ip) {
  let url = `http://${ip}`
  if (port) url += `:${port}`
  if (path) url += `/${path}`
  logger.append(`   💻 ${ip} 🔍  `)

  try {
    const reached = await isReachable(url)
    if (reached) {
      logger.clearLine().append(`   💻 ${url} ${chalk.yellow('OK')}`)
      logger.br()
    } else {
      logger.clearLine().append(`   💻 ${ip} ${chalk.red('NA')}`)
      logger.br()
    }
  } catch (error) {
    logger.clearLine().append(`   💻 ${ip} ${chalk.red(error.code)}`)
    logger.br()
  }
}
