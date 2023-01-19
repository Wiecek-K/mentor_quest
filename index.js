// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const testObj = { a: 3, b: 6, c: 9 };

const doubleValues = (obj) => {
  const returnObj = Object.create(obj);
  for (let key in returnObj) {
    returnObj[key] = returnObj[key] * 2;
  }
  return returnObj;
};

console.log(doubleValues(testObj));
