import { FETCH_STUDENTS_LIST, DELETE_STUDENT } from './type'

export const fetchStudentList = () => ({ type: FETCH_STUDENTS_LIST })
export const deleteStudent = (id) => ({ type: DELETE_STUDENT, id })