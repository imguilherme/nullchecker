
'use scrict'

class NullChecker {

    static get(path, obj, defaultValue){
        let splitPath = !Array.isArray(path) ?  path.split('.') : path 
        if(splitPath.length > 1 && obj && obj[splitPath[0]]) {
            let newObj =  obj[splitPath[0]];
            splitPath.shift();
            return NullChecker.get(splitPath.join('.'), newObj, defaultValue);
        }
        return obj[path] !== undefined ? obj[path] :  defaultValue
    }

}


module.exports = NullChecker;