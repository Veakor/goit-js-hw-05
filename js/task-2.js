const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
  };
  

  const users = [
    { id: 1, name: "John Doe", friends: ["Jane Doe", "Bob Smith"] },
    { id: 2, name: "Jane Doe", friends: ["John Doe", "Bob Smith"] },
    { id: 3, name: "Bob Smith", friends: ["John Doe", "Jane Doe"] },
    { id: 4, name: "Alice Johnson", friends: ["Charlie Brown"] }
  ];
  
  console.log(getUsersWithFriend(users, "Bob Smith"));
  
  
  console.log(getUsersWithFriend(users, "Charlie Brown"));
  
  
  console.log(getUsersWithFriend(users, "David Johnson"));
  
  const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  