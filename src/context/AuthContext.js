import useAuthContext from './useAuthContext';

// testing of the auth provider
const initialState = {
  email: 'valvic6@gmail.com',
  password: 'Text1234'
};

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_prop':
      return {...state, ...action.payload};
    default:
      return state;
  };
};

export const { Context, Provider } = useAuthContext(authReducer, initialState);
