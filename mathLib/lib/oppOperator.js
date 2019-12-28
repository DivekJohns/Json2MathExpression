/* This function returns opposite symbol of given symbol
@Author Divek s
@param String
@Return String
 */
const oppMap = new Map([['-', '+'], ['+', '-'], ['/', '*'], ['*', '/']])
const OppOperator = (opperator)=>  oppMap.get(opperator) || opperator
module.exports = {OppOperator}
