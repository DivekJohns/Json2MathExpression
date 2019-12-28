const {stringToOperator} = require("./stringToOperator")

/* This function converts Object to Array from Given Object
@Author Divek s
@param Object
@Return Array
 */

const mathArray =[];
const object2Array =  (mathObject)=>{
    for (const mathObjectIndex in mathObject) {
        (typeof mathObject[mathObjectIndex] == "object" && mathObject[mathObjectIndex]) ?
            object2Array(mathObject[mathObjectIndex])  : mathArray.push(stringToOperator(mathObject[mathObjectIndex]));
    }
    return mathArray
}

module.exports = {object2Array}
