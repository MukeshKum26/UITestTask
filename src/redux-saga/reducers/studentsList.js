import {
  FETCH_STUDENTS_LIST,
  FETCH_STUDENTS_LIST_SUCCESS,
  FETCH_STUDENTS_LIST_FAILURE,
  DELETE_STUDENT_SUCCESS
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
      case DELETE_STUDENT_SUCCESS:
        const { id } = action
        const studentIndex = ((state && state.result) || []).findIndex(
          item => item.id === id)
        if (studentIndex < 0) return state
        return {
          ...state,
          isFetching: false,
          result: [
            ...state.result.slice(0, studentIndex),
            ...state.result.slice(studentIndex + 1)
          ]
        }
    default: return state
  }
}

export default studentsListReducer
