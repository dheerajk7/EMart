import { LOADING_START, LOADING_STOP } from './actionTypes';

export function loadingStart() {
  return {
    type: LOADING_START,
  };
}

export function loadingStop() {
  return {
    type: LOADING_STOP,
  };
}
