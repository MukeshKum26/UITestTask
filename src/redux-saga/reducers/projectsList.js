import {
  FETCH_PROJECTS_LIST,
  FETCH_PROJECTS_LIST_SUCCESS,
  FETCH_PROJECTS_LIST_FAILURE
} from '../actions/type'

const initialState = {
  loading: false,
  result: [],
  error: null
}

const projectsListReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FETCH_PROJECTS_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_PROJECTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        result: action.result
      }
    case FETCH_PROJECTS_LIST_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      }
    default: return state
  }
}

export default projectsListReducer
