#!/usr/bin/env node

const readline = require('readline');
const useragent = require('useragent');

const rl = readline.createInterface({input: process.stdin});

rl.on('line', function(input) {
    const agent = useragent.lookup(input);
    console.log(agent.family + " " + agent.major + "\t" + agent.os);
});
