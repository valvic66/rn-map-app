import useAuthContext from './useAuthContext';
import { AsyncStorage } from 'react-native';
import trackApi from '../api/trackApi';
import { navigate } from '../utils/navigationRef';

initialState = {
  token: null,
  errMsg: ''
};

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_error':
      return {...state, errMsg: action.payload};
    case 'signup':
    case 'signin':
      return {errMsg: '', token: action.payload}
      default:
      return state;
  };
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  } catch(err) {
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Sign up error!' });
  };
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch(err) {
    console.log(err);
    dispatch({ type: 'add_error', payload: 'Sign in error!' });
  };
};

export const { Context, Provider } = useAuthContext(
  authReducer, 
  {signUp, signIn}, 
  initialState
);
