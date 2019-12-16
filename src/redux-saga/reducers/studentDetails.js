import {
  FETCH_STUDENT_DETAILS,
  FETCH_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILURE
} from '../actions/type'

const initialState = {
  loading: false,
  result: {},
  error: null
}

const studentDetails = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STUDENT_DETAILS:
      console.log("11111111111111111112222222222222222222222222222222")
      return {
        ...state,
        loading: true,
      }
    case FETCH_STUDENT_SUCCESS:
      console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjasd`12`12123123", action) 
      return {
        loading: false,
        error: false,
        result: action.payload
      }
    case FETCH_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default: return state
  }
}

export default studentDetails