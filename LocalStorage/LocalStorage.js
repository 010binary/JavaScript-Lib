/*
  localStorage is a feature in web browsers that allows
  JavaScript to store key-value pairs locally within the
  user's browser. This data persists even after the browser
  is closed, making it useful for storing small amounts of
  information between sessions.
*/

// Adding data to localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('theme', 'dark');

// Retrieving data from localStorage
let username = localStorage.getItem('username');
let isLoggedIn = localStorage.getItem('isLoggedIn');
let theme = localStorage.getItem('theme');

console.log('Username:', username);
console.log('Is logged in:', isLoggedIn);
console.log('Theme:', theme);

// Removing a specific item from localStorage
localStorage.removeItem('theme');

// Clearing all items from localStorage
localStorage.clear();
