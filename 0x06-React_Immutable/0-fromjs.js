import { fromJS } from 'immutable';

//import the immutable.js library
const immutable = require('immutable');

//Defining the function 
function getImmutableObject(object) {
  //Converting the object into an immutable Map
  const immutableMap = Immutable.fromJS(object);

  //Return Map
  return immutableMap;
}