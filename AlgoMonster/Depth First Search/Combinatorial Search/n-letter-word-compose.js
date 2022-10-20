function dfs(n, res, startIndex, path) {              
    if (startIndex == n) {
      res.push(path.join(''));
      return;
    }
    ["a", "b"].forEach(
      letter => {
        path.push(letter);
        dfs(n, res, startIndex+1, path)
        path.pop();
      }
    )
}

function letterCombination(n) {
    var res = [];
    dfs(n, res, 0, []);
    return res;
}