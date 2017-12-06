import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import SelectionReduser from './SelectionReduser';
import MoviesReducer from './MoviesReducer';

export default combineReducers({
    libraries: libraryReducer,
    selectedLibraryId: SelectionReduser,
    movies: MoviesReducer,
});
