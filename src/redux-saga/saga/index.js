import { all } from 'redux-saga/effects'

import studentList from './studentsList'
import projectsList from './projectsList'

export default function* sagas() {
  yield all([
    studentList(),
    projectsList()
  ])
}