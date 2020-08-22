import { combineReducers } from 'redux';
import alert from './alert';
import progress from './progress';

export default combineReducers({ alert, progress });
