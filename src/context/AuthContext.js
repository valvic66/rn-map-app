import useAuthContext from './useAuthContext';

initialState = {
  isSignedIn: false,
  errMsg: ''
};

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_error':
      return {...state, errMsg: action.payload};
    default:
      return state;
  };
};

const signUp = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackApi.post('/signup', { email, password });
      console.log(response.data);
    } catch(err) {
      dispatch({ type: 'add_error', payload: 'Sign up error!' });
    };
  };
};

export const { Context, Provider } = useAuthContext(
  authReducer, 
  {signUp}, 
  initialState
);
