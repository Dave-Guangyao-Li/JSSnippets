// https://leetcode.com/problems/task-scheduler-ii/submissions/
// Array HashMap Simulation
/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */

// Time O(N) | Space O(N)
var taskSchedulerII = function (tasks, space) {
    let answer = 0; // answer means day passed
    let map = new Map(); // we use this map to store next date which can finish current task

    for (let i = 0; i < tasks.length; i++) {
        if (map.has(tasks[i])) {
            // Jump to the next date which can finish the current task
            answer = Math.max(answer, map.get(tasks[i]));
        }
        map.set(tasks[i], answer + space + 1);
        // one day passed
        answer++;
    }
    return answer;
};