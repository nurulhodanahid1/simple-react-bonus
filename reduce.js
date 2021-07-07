const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

const friends = [
    {name: "shkib", money: 10},
    {name: "david", money: 20},
    {name: "virat", money: 70}
];
const totalMoney = friends.reduce((total, friends) => total + friends.money , 0);
console.log(totalMoney);