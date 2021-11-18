import * as types from './types';

export const setDarkTheme = (color) => ({
  type: types.SET_THEME,
  color,
});

export const setLightTheme = (color) => ({
  type: types.SET_THEME,
  color,
});
