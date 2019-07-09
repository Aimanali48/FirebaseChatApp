import { SET_CURRENT_USER } from './types';

// Login - Get User Token
export const loginUser = userData => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    userData
  });
};
