import { call, put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_PROJECTS_LIST,
  FETCH_PROJECTS_LIST_SUCCESS,
  FETCH_PROJECTS_LIST_FAILURE
} from '../actions/type'

import { getProjectsList } from '../../utils/Apiclient'

function * projectsListWorker () {
  try {
    const { data: { result } } = yield call(getProjectsList)
      yield put({ type: FETCH_PROJECTS_LIST_SUCCESS, result})
  } catch (error) {
    yield put({ type: FETCH_PROJECTS_LIST_FAILURE, error })
  }
}

function * projectsListWatcher () {
  yield takeLatest(FETCH_PROJECTS_LIST, projectsListWorker)
}

export default projectsListWatcher