let initialState = {};

export const Reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'Get User':
      return {...state, list: payload};
    default:
      return state;
  }
};
