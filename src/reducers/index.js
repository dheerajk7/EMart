import { combineReducers } from 'redux';
import alert from './alert';
import progress from './progress';
import product from './product';

export default combineReducers({ alert, progress, product });
