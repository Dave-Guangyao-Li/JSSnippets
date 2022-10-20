const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  
function dfs(startIndex, path, res, digits) {
    if (startIndex === digits.length) {
        res.push(path.join(''));
        return;
    }
    let nextNumber = digits.charAt(path.length);
    for (let letter of KEYBOARD[nextNumber]) {
        path.push(letter);
        dfs(startIndex + 1, path, res, digits);
        path.pop();
    }
}
  