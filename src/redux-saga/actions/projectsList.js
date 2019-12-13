import { FETCH_PROJECTS_LIST, DELETE_PROJECT } from './type'

export const fetchProjectList = () => ({ type: FETCH_PROJECTS_LIST })

export const deleteProject = id => ({ type: DELETE_PROJECT, id })