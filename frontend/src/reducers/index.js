import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-from';
import todos from './todos';

export default combineReducers({
    form: formReducer,
    todos
});