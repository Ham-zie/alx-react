import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  
  let value = object;

  for (let key of array) {

    if (typeof value === "object" && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined;
    }
  }
}