import useAuthContext from './useAuthContext';

initialState = {};

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_prop':
      return {...state, ...action.payload};
    default:
      return state;
  };
};

export const { Context, Provider } = useAuthContext(authReducer, initialState);
