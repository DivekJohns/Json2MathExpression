const args = process.argv.slice(2);
const { object2Array, Infixer, breaker } = require("./mathLib");

    console.log('\x1b[23m', `================================== \n`,'\x1b[0m');
    const json2Obj = JSON.parse(require('fs').readFileSync(args[0]));
    const expression = Infixer(object2Array(json2Obj));
    console.log('\x1b[36m', "JsonExp = "+expression ,'\x1b[0m');
    const semiExp = expression.split('=');
    const finalExp = breaker(semiExp[1].replace(' ', ''), semiExp[0]);
    console.log('\x1b[33m', "x = "+finalExp ,'\x1b[0m');
    console.log('\x1b[32m', `x = ${eval(finalExp)} \n`,'\x1b[0m');
    console.log('\x1b[32m', `================================== \n`,'\x1b[0m');
