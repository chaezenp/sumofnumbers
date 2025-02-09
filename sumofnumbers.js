"use strict";
function sumFor(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
function sumWhile(nums) {
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum;
}
function sumRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
function sumTheFunctionalWay(nums) {
    return nums.reduce(function (memo, num) { return memo + num; });
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
