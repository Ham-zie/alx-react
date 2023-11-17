import { is } from 'immutable';

// Import the immutable.js library
const Immutable = require('immutable');

// Define the function areMapsEqual
function areMapsEqual(map1, map2) {
  // Use the is method to compare the Maps for equality
  const isEqual = Immutable.is(map1, map2);

  // Return the boolean value
  return isEqual;
}
