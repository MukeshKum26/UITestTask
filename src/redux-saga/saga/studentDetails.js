import { call, put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_STUDENT_DETAILS,
  FETCH_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILURE,
  ADD_STUDENT,
  UPDATE_STUDENT,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE
} from '../actions/type'

import {
  getStudentDetails,
  addStudentDetails,
  updateStudentDetails
} from '../../utils/Apiclient'

function * studentDetailsWorker ({ id: studentId }) {
  try {
    const { data: { result: payload } } = yield call(getStudentDetails, studentId)
    yield put({ type: FETCH_STUDENT_SUCCESS, payload})
  } catch (error) {
    yield put({ type: FETCH_STUDENT_FAILURE, error })
  }
}

function * addStudentWorker ({ data }) {
  try {
    const { data: { result: payload } } = yield call(addStudentDetails, data)
    yield put({ type: ADD_STUDENT_SUCCESS, payload})
  } catch (error) {
    yield put({ type: ADD_STUDENT_FAILURE, error })
  }
}

function * updateStudentWorker ({ studentData: { id, studentData }}) {
  try {
    const { data: { result: payload } } = yield call(updateStudentDetails, studentData, id)
    yield put({ type: UPDATE_STUDENT_SUCCESS, payload})
  } catch (error) {
    yield put({ type: UPDATE_STUDENT_FAILURE, error })
  }
}

function * studentDetailsWatcher () {
  yield takeLatest(FETCH_STUDENT_DETAILS, studentDetailsWorker)
  yield takeLatest(ADD_STUDENT, addStudentWorker)
  yield takeLatest(UPDATE_STUDENT, updateStudentWorker)
}

export default studentDetailsWatcher