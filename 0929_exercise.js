// 1
const dividedBy3 = (arr) => {
    let sum = 0;
    arr.forEach(elem => sum += elem % 3);
    return sum;
}
console.log(dividedBy3([4, 3, 6, 2]));


// 2
const handleJson = (json1, json2) => {
    const json1Key = Object.keys(json1);
    const json2Key = Object.keys(json2);
    const result = {};

    for (let elem of json1Key) {
        if (!json2Key.includes(elem)) result[elem] = json1[elem];
    }
    return result;
}
console.log(handleJson({a: "ab", b: "cd"}, {b: "de", f: "rr"}));


// 3
const olderThan30 = (arr) => {
    const result = [];
    for (let person of arr) {
        if (person["age"] >= 30) result.push(person["name"]);
    }
    return result;
}
console.log(olderThan30([{"name": "jin", age: 22}, {"name": "brown", age: 42}]));


// 4
const maxLengthSum = (arr) => {
    const lengthArr = [];
    arr.forEach(elem => lengthArr.push(elem.length));
    const maxLength = Math.max.apply(null, lengthArr);

    const maxArr = []
    for (let elem of arr) {
        if (elem.length === maxLength) maxArr.push(elem);
    }

    const result = [];
    for (let i=0; i<maxLength; i++) {
        let sum = 0;
        for (let elem of maxArr) sum += elem[i];
        result.push(sum);
    }
    return result;
}
console.log(maxLengthSum([[1, 4, 6], [123, 4, 68, 1], [3, 2, 7, 3], [1, 2], [1, 1, 1, 1]]));


// 5
const maxLength = (str) => {
    const strArr = str.split(" ");

    const lengthArr = [];
    strArr.forEach(elem => lengthArr.push(elem.length));
    const maxLength = Math.max.apply(null, lengthArr);

    let maxWord = "";
    for (let world of strArr) {
        if (world.length === maxLength) {
            maxWord = world;
            break;
        }
    }
    return maxWord[2];
}
console.log(maxLength("hello my Friends, my name is conrad"));