/* This function breaks the complexity of expression and sends out easy expression out
@Author Divek s
@param 2 Strings
@Return String
 */

const {OppOperator} = require("./oppOperator");
const checkOpp = (o)=> ['+','-','/','*','='].includes(o);
const breaker = (rightProps,breakThis) => {
    let stringArray = [];
    breakThis = breakThis.split(' ').join(",").replace(/[\s''x()]/g,'').split(",").filter((string => string !== ''))
    let length = breakThis.length;
    if(length>3){
        for (let index = 1; index < length; index++) {
            if (checkOpp(breakThis[index]) && checkOpp(breakThis[index+1])) {
                stringArray.push(OppOperator(breakThis[index])+breakThis[index-1]+")"+OppOperator(breakThis[index+1]));
                index++
            }else if(checkOpp(breakThis[index])){
                stringArray.push(OppOperator(breakThis[index])+breakThis[index-1]);
            }
            else {
                stringArray.push(breakThis[index]);
            }
        }
        return "("+rightProps+stringArray.join('');
    }
    return rightProps+breakThis.slice(0,breakThis.length-1);
}
    

module.exports = {breaker}
