#!/usr/bin/env node

const util = require('util')
const execSync = util.promisify(require('child_process').execSync)
const serverRoot = require('path').resolve(`${__dirname}`)

const userOption = process.argv[2] || null // assign null to re-reoute to Help section

async function run (command) {
  const { stdout, stderr } = await execSync(command, { stdio: 'inherit' })
  if (stdout) console.log(stdout)
  if (stderr) console.error(stderr)
}

switch (userOption) {
  case 'add':
  case 'create': // alternate alias
  case 'new': // alternate alias
  case 'serve': // alternate alias
  case 'deploy': // alternate alias
    run('pm2 start ' + serverRoot + '/main/index.js -f --namespace quickprox --name tcp-proxy-0.0.0.0-' + (process.argv[3] || '0000') + '-to-' + (process.argv[4] || '0000') + '-' + (process.argv[5] || '0000') + ' -- ' + (process.argv[3] || '0000') + ' ' + (process.argv[4] || '0000') + ' ' + (process.argv[5] || '0000'))
    break
  case 'delete':
  case 'remove': // alternate alias
  case 'kill': // alternate alias
    if (process.argv[3] === 'all') {
      run('pm2 delete quickprox')
    } else {
      run('pm2 delete ' + (process.argv[3] || 'empty-proxy'))
    }
    break
  case 'list':
  case 'ls': // alternate alias
  case 'ps': // alternate alias
  case 'l': // alternate alias
    run('pm2 list')
    break
  case 'status':
  case 'monit': // alternate alias
  case 'details': // alternate alias
    run('pm2 monit')
    break
  default: // Shows Help section
    console.log(
      '\n ----- Commands available: -----\n\n' +
      'quickprox add 8080 10.0.0.136 3000\t<-- Adds a new TCP Proxy\n\n' +
      'quickprox list\t\t\t<-- Lists TCP Proxies created\n\n' +
      'quickprox delete 1\t\t\t<-- Deletes a TCP Proxy based on its id\n\n' +
      'quickprox delete all\t\t\t<-- Deletes all TCP Proxies created\n\n' +
      'quickprox status\t\t\t<-- Deletes a TCP Proxy based on its id\n\n' +
      'For full usage documentation, please visit ' +
      '----------------------------------------'
    )
    break
}
