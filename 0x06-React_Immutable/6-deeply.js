import { Map } from 'immutable';

// Import the immutable.js library
const Immutable = require('immutable');

// Define the function mergeDeeplyElements
function mergeDeeplyElements(page1, page2) {
  // Use the Map constructor to convert the objects into immutable Maps
  const map1 = new Immutable.Map(page1);
  const map2 = new Immutable.Map(page2);

  // Use the mergeDeep method to merge the Maps deeply
  const merged = map1.mergeDeep(map2);

  // Use the valueSeq method to get a List of the values of the merged Map
  const list = merged.valueSeq();

  // Return the List
  return list;
}
