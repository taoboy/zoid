
/*  Url Encode
    ----------

    Replace ? and & with encoded values. Allows other values (to create more readable urls than encodeUriComponent)
*/

export function urlEncode(str) {
    return str.replace(/\?/g, '%3F').replace(/\&/g, '%26');
}


/*  Camel To Dasherize
    ------------------

    Convert camelCaseText to dasherized-text
*/

export function camelToDasherize(string) {
    return string.replace(/([A-Z])/g, (g) => {
        return `-${g.toLowerCase()}`;
    });
}


/*  Dasherize to Camel
    ------------------

    Convert dasherized-text to camelCaseText
*/

export function dasherizeToCamel(string) {
    return string.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
    });
}


/*  Extend
    ------

    Extend one object with another
*/

export function extend(obj, source) {
    if (!source) {
        return obj;
    }

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            obj[key] = source[key];
        }
    }

    return obj;
}


/*  Values
    ------

    Get all of the values from an object as an array
*/

export function values(obj) {
    let results = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            results.push(obj[key]);
        }
    }

    return results;
}


/*  Unique ID
    ---------

    Generate a unique, random hex id
*/

export function uniqueID() {

    let chars = '0123456789abcdef';

    return 'xxxxxxxxxx'.replace(/./g, () => {
        return chars.charAt(Math.floor(Math.random() * chars.length));
    });
}


/*  Base 64 Encode
    --------------

    Base 64 encode a string
*/

export function b64encode(str) {
    return window.btoa(str).replace(/[=]/g, '_');
}


/*  Base 64 Decode
    --------------

    Base 64 decode a string
*/

export function b64decode(str) {
    return window.atob(str.replace(/[_]/g, '='));
}