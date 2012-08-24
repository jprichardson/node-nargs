

module.exports = function nargs() {
    arguments = arguments[0];
    if (arguments.length === 1)
        if (Array.isArray(arguments[0])) 
            return arguments[0];
        else
            if (arguments[0] instanceof RegExp)
                return [arguments[0]];
            else if (arguments[0] instanceof Date)
                return [arguments[0]];
            else if (typeof arguments[0] === 'string')
                return [arguments[0]];
            else if (typeof arguments[0] === 'number')
                return [arguments[0]];
            else if (typeof arguments[0] === 'object')
                return arguments[0];
            else //hoping some sort of object
                return arguments[0]; 
    else
        return arguments;
}

