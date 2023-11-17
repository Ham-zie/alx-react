import { Map } from 'immutable';

const Immutable = require('immutable');

function getImmutableObject(object){
    
    const immutableMap = new Immutable.Map(object);

    return immutableMap;
}