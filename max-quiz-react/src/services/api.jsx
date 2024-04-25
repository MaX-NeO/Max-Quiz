// test


import axios from 'axios'


const URI = 'http://localhost:7777/api'

const SignIn = (email, password) => axios.post(URI + '/auth/login', { email,password })
const SignUp = (name, email, phone, address, password) => axios.post(URI + '/auth/register', { name, email, phone, address, password })

// const logindata ={
//     email:'',
//     password:''
// }
// const registerdata ={
//     name:'',
//     phone:"0",
//     address:'',
//     email:'',
//     password:''
// }
export { SignIn, SignUp }