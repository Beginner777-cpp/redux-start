import axios from 'axios';
import * as actions from '../api';
import { bugsRequested } from '../bugs/reducer';
const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type)
        return next(action);

    dispatch(bugsRequested());
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload
    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9002/api',
            url,
            method,
            data

        })

        //General
        dispatch(actions.apiCallSuccess(response.data))
        //Specific
        onSuccess ? dispatch({ type: onSuccess, payload: response.data }) : null
    } catch (error) {
        //General
        dispatch(actions.apiCallFailed(error.message))
        //Specific
        onError ? dispatch({ type: onError, payload: error.message }) : null;
    }
}

export default api;