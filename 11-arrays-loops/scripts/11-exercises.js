// // 11a
// const nums = [10, 20, 30];
// const arr1 = [1, 20, 22, 24, 5];
// const arr2 = ['hi', 'hello', 'good'];
// nums[2] = 9;
// console.log(nums);

// // 11b
// function getLastValue(array) {
//     return array[array.length - 1];
// }

// console.log(getLastValue(nums));
// console.log(getLastValue(arr1));
// console.log(getLastValue(arr2));

// // 11c
// function arraySwap(array) {
//     const first = array[0];
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = first;
//     return array;
// }

// console.log(arraySwap(arr1)); // [ 5, 20, 22, 24, 1 ]
// console.log(arraySwap(arr2)); //  [ "good", "hello", "hi" ]

// 11d: 0 2 4 6 8 10
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }

// 11e: 5 4 3 2 1 0
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }
// i = 5
// while (i >= 0) {
//     console.log(i);
//     i--;
// } 

// 11g
// const nums = [10, 20, 30];

// const nums2 = [];
// for (let i = 0; i < nums.length; i++) {
//     nums2[i] = nums[i] + 1;
// }
// console.log(nums2); // [11 21 31]

// 11h
// const nums = [10, 20, 30];
// const arr1 = [1, 2, 3];
// const arr2 = [-2, -1, 0, 99];
// function addOne(array) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr[i] = array[i] + 1;
//     }
//     return newArr;
// }
// console.log(addOne(nums)); // [ 11, 21, 31 ]
// console.log(nums); // [ 10, 20, 30 ]
// console.log(addOne(arr1)); // [ 2, 3, 4 ]
// console.log(arr1); // [ 1, 2, 3 ]
// console.log(addOne(arr2)); // [ -1, 0, 1, 100 ]
// console.log(arr2); // [ -2, -1, 0, 99 ]

// 11 i
// const arr1 = [1, 2, 3];
// const arr2 = [-2, -1, 0, 99];
// function addNum(array, num) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr[i] = array[i] + num;
//     }
//     return newArr;
// }
// console.log(addNum(arr1, 2));
// console.log(addNum(arr1, 3));
// console.log(addNum(arr2, 2));

// 11j
// function addArrays(array1, array2) {
//     // Assumes arrays are the same size
//     const newArr = [];
//     for (let i = 0; i < array1.length; i++) {
//         newArr[i] = array1[i] + array2[i];
//     }
//     return newArr;
// }
// console.log(addArrays([1,1,2], [1,1,3]));
// console.log(addArrays([1,2,3], [4,5,6]));

// 11k
// function countPositives(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPositives([1, -3, 5]));
// console.log(countPositives([-2, 3, -5, 7, 10]));

// 11l
// function minMax(nums) {
//     const numLen = nums.length;
//     if (numLen === 0) {
//         return {min: null, max: null};
//     }
    
//     const minMax = {min: nums[0], max: nums[0]};
    
//     for (let i = 0; i < numLen; i++) {
//         if (nums[i] <= minMax.min) {
//             minMax.min = nums[i];
//         }
//         if (nums[i] >= minMax.max) {
//             minMax.max = nums[i];
//         }
//     }
//     return minMax;
// }

// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));
// console.log(minMax([]));
// console.log(minMax([3]));

// 11n
// function countWords(words) {
//     let counts = {};
//     for (let i = 0; i < words.length; i++) {
//         if (!counts[words[i]]) {
//             counts[words[i]] = 1; // new word
//         } else {
//             counts[words[i]]++;
//         }
//     }
//     return counts;
// }

// console.log(countWords(['apple', 'grape', 'apple', 'apple'])); //  { apple: 3, grape: 1 }
// console.log(countWords(['apple', 'grape', 'banana', 'orange'])); // { apple: 1, grape: 1, banana: 1, orange: 1 }
// console.log(countWords([])); // Object {  }

// 11opq
function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

// 11w
function unique(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (findIndex(newArr, array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// console.log(findIndex(['green', 'red', 'blue', 'red',], 'red')); // 1
// console.log(findIndex(['green', 'red', 'blue', 'red',], 'yellow')); // -1

console.log(unique(['green', 'red', 'blue', 'red',])); // ['green', 'red', 'blue']
console.log(unique(['red', 'green', 'green', 'red',], 'yellow')); // ['red', 'green']



// 11r
// function removeEgg(foods) {
//     const newArr = [];
//     let eggCounter = 0;
//     for (let i = 0; i < foods.length; i++) {
//         if (foods[i] === 'egg' && eggCounter < 2) {
//             eggCounter++;
//             continue;
//         }
//         newArr.push(foods[i]);
//     }
//     return newArr;
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// function removeEggReverse(foods) {
//     const newArr = [];
//     const foodsReverse = foods.slice(0, foods.length);
//     foodsReverse.reverse();
//     let eggCounter = 0;
//     for (let i = 0; i < foodsReverse.length; i++) {
//         if (foodsReverse[i] === 'egg' && eggCounter < 2) {
//             eggCounter++;
//             continue;
//         }
//         newArr.push(foodsReverse[i]);
//     }
//     return newArr.reverse();
// }
// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log(removeEggReverse(foods));
// console.log(foods)

// 11v
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

