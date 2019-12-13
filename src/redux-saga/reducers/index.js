import { combineReducers } from 'redux'

import studentList from './studentsList'
import projectsList from './projectsList'

const rootReducer = combineReducers({
  studentList,
  projectsList
})

export default rootReducer