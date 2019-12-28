/* Expose mathLib
@Author Divek s
 */


const {object2Array} = require("./lib/objectToArray");
const {Infixer}    = require("./lib/infixer");
const {breaker}    = require("./lib/breaker");
const {OppOperator} = require('./lib/oppOperator')
const {stringToOperator} =require('./lib/stringToOperator')

module.exports = {object2Array, Infixer , breaker, OppOperator, stringToOperator}
