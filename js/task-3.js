const sortByDescendingFriendCount = users => {
    return users.sort((a, b) => b.friends.length - a.friends.length);
  };
  
  const users = [
    { id: 1, name: "John Doe", friends: ["Jane Doe", "Bob Smith"] },
    { id: 2, name: "Jane Doe", friends: ["John Doe", "Bob Smith"] },
    { id: 3, name: "Bob Smith", friends: ["John Doe", "Jane Doe"] },
    { id: 4, name: "Alice Johnson", friends: ["Charlie Brown"] }
  ];
  
  console.log(sortByDescendingFriendCount(users));
  console.log(
    sortByDescendingFriendCount([
      {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
      },
      {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
      },
      {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
      },
      {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
      },
      {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
      },
      {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
      },
      {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
      }
    ])
  );