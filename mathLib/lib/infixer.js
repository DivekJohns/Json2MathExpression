
/* This function converts converts prefix to Infix expression from given Object
@Author Divek s
@param Array
@Return String
*/
 const Infixer = (exp) =>{
    const finalExpArray = [];
    let length = exp.length;
    for (let index = length - 1; index >= 0; index--) {
        if (['+','-','/','*','='].includes(exp[index])) {
    let operatorX = finalExpArray[finalExpArray.length-1]; finalExpArray.pop();
    let operatorY = finalExpArray[finalExpArray.length-1]; finalExpArray.pop();
    let temp = new String('');
        (index <= 1) ? temp = operatorX + " " + exp[index] + " " + operatorY :
            temp = "(" + operatorX + " " + exp[index]+ " " + operatorY + ")";
        finalExpArray.push(temp);
        }
        else {
        finalExpArray.push((1, exp[index]));
        }
    }
    return finalExpArray[finalExpArray.length-1]
    }

module.exports = {Infixer}
