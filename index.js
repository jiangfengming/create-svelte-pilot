#!/usr/bin/env node

const { spawn } = require('child_process');
spawn('npx', ['--yes', 'tiged', 'jiangfengming/svelte-pilot-template'], { stdio: 'inherit' });
