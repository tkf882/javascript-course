const addNum = (arr, num) => {
    return arr.map(value => value + num);
};

console.log(addNum([1,2,3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
    return foods.filter(value => {return value !== 'egg'});
}

const food = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(food));