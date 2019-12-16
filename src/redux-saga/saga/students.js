import { call, put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_STUDENTS_LIST,
  FETCH_STUDENTS_LIST_SUCCESS,
  FETCH_STUDENTS_LIST_FAILURE,
  DELETE_STUDENT,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE
} from '../actions/type'

import { getStudendsList, deleteStudent } from '../../utils/Apiclient'

function * studentListWorker () {
  try {
    const { data: { result } } = yield call(getStudendsList)
      yield put({ type: FETCH_STUDENTS_LIST_SUCCESS, result})
  } catch (error) {
    yield put({ type: FETCH_STUDENTS_LIST_FAILURE, error })
  }
}

function * studentListWatcher () {
  yield takeLatest(FETCH_STUDENTS_LIST, studentListWorker)
  yield takeLatest(DELETE_STUDENT, deleteStudentWorker)
}

function * deleteStudentWorker ({ id }) {
  try {
      yield call(deleteStudent, id)
      yield put({ type: DELETE_STUDENT_SUCCESS, id })
  } catch (error) {
    yield put({ type: DELETE_STUDENT_FAILURE })
  }
}

export default studentListWatcher