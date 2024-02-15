import * as types from "./userTypes"


const initialState = {
  data: [],
  error: ""
}


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return { ...state }
    case types.FETCH_USERS_SUCCESS:
      return { ...state, data: action.payload, error: "" }
    case types.FETCH_USERS_FAILURE:
      return { ...state, error: action.payload, data: [] }
    default:
      return state
  }
}