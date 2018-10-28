import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const RootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    loading: loadingReducer
});

export default RootReducer;
