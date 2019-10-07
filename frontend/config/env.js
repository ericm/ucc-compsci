#!/usr/bin/env node
const envvar = require('./getEnv')
const fs = require('fs')

var buf = fs.readFileSync(__dirname + '/../src/env/firebase.template.ts')

fs.writeFileSync(__dirname + '/../src/env/firebase.ts', envvar.expandEnvVars(buf.toString()))

console.log('Template files have been created')
