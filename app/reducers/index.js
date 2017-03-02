import {combineReducers} from 'redux';
import places from './PlaceReducers'

export default combineReducers({
    places: places
});
