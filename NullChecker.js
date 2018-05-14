
'use scrict'

class NullChecker {

    static get(path, obj, defaultValue){
        let splitPath = path.split('.');

        if(splitPath.length > 1 && obj && obj[splitPath[0]]) {
            let newObj =  obj[splitPath[0]];
            splitPath.shift();
            return NullChecker.get(splitPath.join('.'), newObj, defaultValue);
        }

        if(obj[path] !== undefined)
            return obj[path];
        else
            return defaultValue;

    }

}


module.exports = NullChecker;