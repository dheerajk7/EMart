import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_ERROR,
  CLEAR_ERROR,
} from './actionTypes';

// for setting up message in alert state
function setMessage(title, detail) {
  return {
    type: SET_MESSAGE,
    title,
    detail,
  };
}

function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}

function setError(title, detail) {
  return {
    type: SET_ERROR,
    title,
    detail,
  };
}

function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

export { setMessage, clearMessage, setError, clearError };
