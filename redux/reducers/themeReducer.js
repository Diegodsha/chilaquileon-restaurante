import * as types from '../actions/types';

let themeState = {
  color: 'ligth',
};

const theme = (state = themeState, action) => {
  const { type, color } = action;

  switch (type) {
    case types.SET_THEME:
      return { ...state, color: color };

    default:
      return state;
  }
};

export default theme;
