"use strict";


const persons = [
    {firstname : "Chuck", lastname: "Cheese"},
    {firstname : "Ronald", lastname: "McDonald"},
    {firstname : "John", lastname: "Wick"}
];

persons.map(getFullName);

function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
}

const prices = [15.5, 2.3, 1.1, 4.7];
const total = prices.reduce(getSum, 0);

function getSum(total, num) {
    return total + Math.round(num);
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

test("Returns combined firstname and last name in string", () => {
    expect(persons.map(getFullName).toBe("Chuck Cheese,Ronald McDonald,John Wick"))
})