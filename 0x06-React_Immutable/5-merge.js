import { List, Map } from 'immutable';

// Import the immutable.js library
const Immutable = require('immutable');

// Define the function concatElements
function concatElements(page1, page2) {
  // Use the List constructor to convert the arrays into immutable Lists
  const list1 = new Immutable.List(page1);
  const list2 = new Immutable.List(page2);

  // Use the concat method to concatenate the Lists
  const list = list1.concat(list2);

  // Return the List
  return list;
}

// Define the function mergeElements
function mergeElements(page1, page2) {
  // Use the Map constructor to convert the objects into immutable Maps
  const map1 = new Immutable.Map(page1);
  const map2 = new Immutable.Map(page2);

  // Use the merge method to merge the Maps
  const merged = map1.merge(map2);

  // Use the valueSeq method to get a List of the values of the merged Map
  const list = merged.valueSeq();

  // Return the List
  return list;
}
