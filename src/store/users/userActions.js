import * as types from "./userTypes"

export function fetchUserRequest() {
  return { type: types.FETCH_USERS_REQUEST }
}
export function fetchUserSuccess(users) {
  return { type: types.FETCH_USERS_SUCCESS, payload: users }
}
export function fetchUserFailure(error) {
  return { type: types.FETCH_USERS_FAILURE, payload: error }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
}

