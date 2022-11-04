function isAlphaNumeric(c) {
    // use RegExp.test() to check if c is alphanumeric 
    return /^[a-zA-Z0-9]*$/.test(c);
}