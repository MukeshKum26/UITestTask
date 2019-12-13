import axios from 'axios'

export const getData = ( url, params ) => axios.get( url, params )

export const postData = ( { url, body } ) => axios.post( url, body )

export const putData = ( { url, body }) => axios.put( url, body )

export const deleteData = ( url ) => axios.delete( url )
