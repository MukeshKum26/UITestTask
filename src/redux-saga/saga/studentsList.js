import { call, put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_STUDENTS_LIST,
  FETCH_STUDENTS_LIST_SUCCESS,
  FETCH_STUDENTS_LIST_FAILURE
} from '../actions/type'

import { getStudendsList } from '../../utils/Apiclient'

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
}

export default studentListWatcher