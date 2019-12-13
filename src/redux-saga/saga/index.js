import { all } from 'redux-saga/effects'

import studentList from './studentsList'

export default function* sagas() {
  yield all([
    studentList()
  ])
}