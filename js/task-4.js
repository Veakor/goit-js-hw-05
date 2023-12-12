
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);

const users = [
  { id: 1, name: "John Doe", gender: "male", balance: 1000 },
  { id: 2, name: "Jane Doe", gender: "female", balance: 1500 },
  { id: 3, name: "Bob Smith", gender: "male", balance: 2000 },
  { id: 4, name: "Alice Johnson", gender: "female", balance: 1200 }
];

console.log(getTotalBalanceByGender(users, "male")); 
console.log(getTotalBalanceByGender(users, "female"));





const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); 

console.log(getTotalBalanceByGender(allUsers, "female"));