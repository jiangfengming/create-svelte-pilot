#!/usr/bin/env node

const { spawn } = require('child_process');
spawn('npx', ['--yes', 'degit', 'svelte-pilot/svelte-pilot-template', process.argv[2]], { stdio: 'inherit' });
