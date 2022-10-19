// An array of boolean values is divided into two sections; the left section consists of all false and the right section consists of all true. Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.

// Input: arr = [false, false, true, true, true]

// Output: 2

// Explanation: first true's index is 2.


function find_boundary(arr) {
    let left = 0;
    let right = arr.length - 1;
    let boundary_index = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === true) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return boundary_index;
}




// We keep a variable boundary_index that represents the leftmost true's index currently recorded. 
// If the current element is true, then we update boundary_index with its index and discard everything to the right including the current element itself since its index has been recorded by the variable.

// Time Complexity: O(log(n))