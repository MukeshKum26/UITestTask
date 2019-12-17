import { getData, postData, deleteData, putData } from './axios'

const REACT_BASE_URL =  process.env.REACT_APP_BASE_URL

export const getStudendsList = () => getData(`${REACT_BASE_URL}/student`) //env

export const deleteStudent = id => deleteData(`${REACT_BASE_URL}/student/${id}`)

export const getProjectsList = () => getData(`${REACT_BASE_URL}/projects`) //env

export const deleteProject = id => deleteData(`${REACT_BASE_URL}/projects/${id}`)

export const getStudentDetails = id => getData(`${REACT_BASE_URL}/student/${id}`)

export const addStudentDetails = data => postData(`${REACT_BASE_URL}/student/`, data)

export const updateStudentDetails = data => putData(`${REACT_BASE_URL}/student/${data.id}`, data)