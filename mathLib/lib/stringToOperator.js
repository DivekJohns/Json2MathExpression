/* This function returns mapped operator from given string
@Author Divek s
@param 2 String
@Return String
 */

const oppMapper = new Map([['equal', '='], ['add', '+'], ['subtract', '-'], ['multiply', '*'], ['divide', '/']])
module.exports.stringToOperator = operator =>  oppMapper.get(operator) || operator
