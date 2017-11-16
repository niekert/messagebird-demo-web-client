import * as authApi from 'api/auth';
import { API_KEY_STORAGE_KEY } from 'app-constants';

export const AUTHENTICATE = 'app/AUTHENTICATE';
export const AUTHENTICATE_SUCCESS = 'app/AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_ERROR = 'app/AUTHENTICATE_ERROR';

export function authenticate(apikey) {
  return async dispatch => {
    dispatch({ type: AUTHENTICATE });

    try {
      await authApi.authenticate(apikey);

      // Set in localstorage so we can access it from anywhere easily.
      localStorage.setItem(API_KEY_STORAGE_KEY, apikey);

      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload: { apikey },
      });
    } catch (error) {
      dispatch({
        type: AUTHENTICATE_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };
}
