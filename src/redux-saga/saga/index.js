import { all } from 'redux-saga/effects'

import student from './students'
import projects from './projects'

export default function* sagas() {
  yield all([
    student(),
    projects()
  ])
}