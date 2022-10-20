
// We use path to keep track of the nodes we have visited to reach the current node and use it to construct our solution when we reach leaf nodes.
function dfs(root, path, res) {
    // exit condition, reached leaf node, append paths to results
    if (root.children.length === 0) {
        path.push(root.val);
        const cur_path = path.join('->');
        res.push(cur_path);
        return;
    }
    // dfs on each non-null child
    for (const child of root.children) {
        if (child) {
            const path_copy = Array.from(path);
            path_copy.push(root.val);
            dfs(child, path_copy, res);
        }
    }
}




// we create a new list each time we recurse with path + [root.val]. This is not space-efficient because creating a new list requires allocating new space in memory and copying over each element. A more efficient way is to use a single list path and push and pop following the call stack
function dfs(root, path, res) {
    // exit condition, reached leaf node, append paths to results
    if (root.children.length === 0) {
        path.push(root.val);
        const cur_path = path.join('->');
        res.push(cur_path);
        path.pop();
        return;
    }
    // dfs on each non-null child
    for (const child of root.children) {
        if (child) {
            path.push(root.val);
            dfs(child, path, res);
            path.pop();
        }
    }
}