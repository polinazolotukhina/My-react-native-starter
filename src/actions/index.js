import * as types from '../constants/actionTypes';
const queryString = require('query-string');


function moviesRequest() {
    return {
        type: types.MOVIES_REQUEST,
        isLoading: true,
        error: null
    };
}

function moviesSuccess(json) {
    return {
        type: types.MOVIES_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function moviesFailure(json) {
    return {
        type: types.MOVIES_FAILURE,
        isLoading: false,
        error: json
    };
}

export function getMovies(params, partUrl) {
    const API_KEY = '79eb5f868743610d9bddd40d274eb15d';
    const parameters = {
      ...params,
      api_key: API_KEY
    };
    const query = queryString.stringify(parameters);
    const url = `https://api.themoviedb.org${partUrl}${query}`;
    console.log(url);
    return (dispatch) => {
        dispatch(moviesRequest());
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(moviesSuccess(items)))
        .catch((error) => dispatch(moviesFailure(error)));
    };
}
