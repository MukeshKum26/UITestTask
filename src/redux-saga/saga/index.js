import { all } from 'redux-saga/effects'

import student from './students'
import projects from './projects'
import studentDetails from './studentDetails'

export default function* sagas() {
  yield all([
    student(),
    projects(),
    studentDetails()
  ])
}