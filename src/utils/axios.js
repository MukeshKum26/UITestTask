import axios from 'axios'

axios.defaults.headers.common['Authorization'] = "Bearer b1e62ff9-bd22-414b-8060-6w1210c1f167"

export const getData = ( url, params ) => axios.get( url, params )

export const postData = ( url, body ) => axios.post( url, body )

export const putData = ( url, body ) => axios.put( url, body )

export const deleteData = ( url ) => axios.delete( url )
