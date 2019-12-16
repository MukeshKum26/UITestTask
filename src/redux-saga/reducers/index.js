import { combineReducers } from 'redux'

import student from './students'
import projects from './projects'
import studentDetails from './studentDetails'

const rootReducer = combineReducers({
  student,
  projects,
  studentDetails
})

export default rootReducer