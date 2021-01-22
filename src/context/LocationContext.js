import useLocationContext from './useContext';

initialState = {
  currentLocation: null,
  locations: [],
  isRecording: false
}

const locationReducer = (state, action) => {
  switch(action.type) {
    case 'add_location':
      return {...state, currentLocation: action.payload}
    default:
      return state;
  }
}

const addLocation = dispatch => location => {
  dispatch({ type: 'add_location', payload: location });
}

export const { Context, Provider } = useLocationContext(
  locationReducer,
  { addLocation },
  initialState
)