import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types"

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  isAdmin: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
            isLoading: false,
            user: action.payload
        }
        case LOGIN_SUCCESS:
          localStorage.setItem("token", action.payload.token)
          return {
            ...state, //I was just bringing token so they seperated token into seperate variables
            ...action.payload,
              isLoading: false,
              isAuthenticated: true,
              isAdmin: action.payload.isAdmin
          }
          case REGISTER_SUCCESS:
            return {
              ...state,
              ...action.payload,
                isLoading: false,
                isAuthenticated: false
            }
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
              localStorage.removeItem("token")
              return {
                ...state,
                token: null,
                  user: null,
                  isAuthenticated: false
              }
              case REGISTER_FAIL:
                return {
                  ...state,
                  user: null,
                    isAuthenticated: false
                }
                default:
                  return state
  }
}