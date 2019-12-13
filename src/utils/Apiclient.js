import { getData, postData, deleteData, putData } from './axios'

export const getStudendsList = () => getData('http://localhost:12345/api/v1/student') //env