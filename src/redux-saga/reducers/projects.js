import {
  FETCH_PROJECTS_LIST,
  FETCH_PROJECTS_LIST_SUCCESS,
  FETCH_PROJECTS_LIST_FAILURE,
  DELETE_PROJECT_SUCCESS
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
      case DELETE_PROJECT_SUCCESS:
        const { id } = action
        const projectIndex = ((state && state.result) || []).findIndex(
          item => item.id === id)
        if (projectIndex < 0) return state
        return {
          ...state,
          isFetching: false,
          result: [
            ...state.result.slice(0, projectIndex),
            ...state.result.slice(projectIndex + 1)
          ]
        }
    default: return state
  }
}

export default projectsListReducer
