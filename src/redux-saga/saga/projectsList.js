import { call, put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_PROJECTS_LIST,
  FETCH_PROJECTS_LIST_SUCCESS,
  FETCH_PROJECTS_LIST_FAILURE,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions/type'

import { getProjectsList, deleteProject } from '../../utils/Apiclient'

function * projectsListWorker () {
  try {
    const { data: { result } } = yield call(getProjectsList)
      yield put({ type: FETCH_PROJECTS_LIST_SUCCESS, result})
  } catch (error) {
    yield put({ type: FETCH_PROJECTS_LIST_FAILURE, error })
  }
}

function * deleteStudentWorker ({ id }) {
  try {
      yield call(deleteProject, id)
      yield put({ type: DELETE_PROJECT_SUCCESS, id })
  } catch (error) {
    yield put({ type: DELETE_PROJECT_FAILURE })
  }
}

function * projectsListWatcher () {
  yield takeLatest(FETCH_PROJECTS_LIST, projectsListWorker)
  yield takeLatest(DELETE_PROJECT, deleteStudentWorker)
}

export default projectsListWatcher