import { combineReducers } from 'redux'

import student from './students'
import projects from './projects'

const rootReducer = combineReducers({
  student,
  projects
})

export default rootReducer