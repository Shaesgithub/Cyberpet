const fs = require('fs');
const readline = require('readline');

const logAsciiArt = (file) => {
    const displayTextFile = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        console: true
    });
}

const funkylog = ({ delay, randomized }) => {
    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
      
    return async (s) => {
      for (const c of s) {
        process.stdout.write(c);
        await sleep((randomized ? Math.random() : 1) * delay);
      }
      process.stdout.write('\n');
    }
};

const funkyLog = funkylog({ delay: 80, randomized: true });

const getMethodsOf = (obj) => {
    const methods = {}
    Object.getOwnPropertyNames( Object.getPrototypeOf(obj) ).forEach(methodName => {
      methods[methodName] = obj[methodName]
    })
    return Object.keys(methods).slice(1)
}

module.exports = { funkyLog, getMethodsOf, logAsciiArt }