import { getData, postData, deleteData, putData } from './axios'

export const getStudendsList = () => getData('http://localhost:12345/api/v1/student') //env

export const deleteStudent = id => deleteData(`http://localhost:12345/api/v1/student/${id}`)

export const getProjectsList = () => getData('http://localhost:12345/api/v1/projects') //env

export const deleteProject = id => deleteData(`http://localhost:12345/api/v1/projects/${id}`)

export const getStudentDetails = id => getData(`http://localhost:12345/api/v1/student/${id}`)

export const addStudentDetails = data => postData(`http://localhost:12345/api/v1/student/`, data)

export const updateStudentDetails = data => putData(`http://localhost:12345/api/v1/student/${data.id}`, data)