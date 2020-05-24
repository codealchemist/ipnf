const args = require('args')

args
  .option('ranges', 'IP ranges')
  .option('path', 'Path to use on each IP')
  .option('port', 'Port to use on each IP', 80)
  .option('timeout', 'Timeout in ms', 5000)

const flags = args.parse(process.argv, {
  usageFilter: (usage) => {
    return usage.replace(
      '[options] [command]',
      '-r [CSV IP ranges] -p [[path]] -P [[port:80]] -t [[ms:5000]]'
    )
  }
})
args.examples([
  {
    usage: 'ipnf -r [ip-ranges] -p [[path]]',
    description: 'IP ranges are required while path is optional.'
  },
  {
    usage: 'ipnf -r xxx.xxx.xx1.0/24,xxx.xxx.xx2.0/24 -p images/logo.png',
    description: 'Scans every IP looking for the "images/logo.png" file.'
  },
  {
    usage: 'ipnf -r xxx.xxx.xx1.0/24 -P 8080',
    description: 'Scans every IP at port 8080.'
  },
  {
    usage: 'ipnf -r xxx.xxx.xx1.0/24 -t 200',
    description: 'Waits 200ms before timeout.'
  }
])

module.exports = { args, flags }
