import axios from "axios"
import { returnErrors } from "./errorAction"

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types"

//Check token and load User :
export const loadUser = () => (dispatch, getState) => {
  //getState : helps us getting certain parts of our state
  //User Loading :
  dispatch({ type: USER_LOADING })

  axios
    .get("/api/auth/login", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

//Login USer :
export const login = ({ email, password }) => dispatch => {
  //headers :
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  //Request Body
  const body = JSON.stringify({ email, password })

  axios
    .post("/api/auth/login", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      )
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

//Login User
export const register = ({ name, email, password }) => dispatch => {
  //headers :
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  //Request Body
  const body = JSON.stringify({ name, email, password })

  axios
    .post("/api/auth/register", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      )
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

//LogOut User :
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const tokenConfig = getState => {
  //Get token from localstorage:
  const token = getState().auth.token

  //Headers:
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  //If Token then add to headers
  if (token) {
    config.headers["auth-token"] = token
  }
  return config
}
