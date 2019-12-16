import {
    FETCH_STUDENTS_LIST,
    DELETE_STUDENT,
    FETCH_STUDENT_DETAILS,
    ADD_STUDENT,
    UPDATE_STUDENT
} from './type'

export const fetchStudentList = () => ({ type: FETCH_STUDENTS_LIST })
export const deleteStudent = id => ({ type: DELETE_STUDENT, id })
export const fetchStudentDetails = id => ({ type: FETCH_STUDENT_DETAILS, id })
export const addStudent = data => ({ type: ADD_STUDENT, data })
export const updateStudent = (studentData) => ({ type: UPDATE_STUDENT, studentData })