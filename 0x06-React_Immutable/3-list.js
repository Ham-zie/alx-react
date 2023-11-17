import { List } from 'immutable';

// Import the Immutable.js library
const Immutable = require('immutable');

// Define the function getListObject
export function getListObject(array) {
  // Use the List constructor to convert the array into an immutable List
  const immutableList = new Immutable.List(array);

  // Return the immutable List
  return immutableList;
}

// Define the function addElementToList
export function addElementToList(list, element) {
  // Use the push method to append the element to the list
  const newList = list.push(element);

  // Return the new list
  return newList;
}
