import {
  FETCH_STUDENTS_LIST,
  FETCH_STUDENTS_LIST_SUCCESS,
  FETCH_STUDENTS_LIST_FAILURE
} from '../actions/type'

const initialState = {
  loading: false,
  result: [],
  error: null
}

const studentsListReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FETCH_STUDENTS_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_STUDENTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        result: action.result
      }
    case FETCH_STUDENTS_LIST_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      }
    default: return state
  }
}

export default studentsListReducer
