// test


import axios from 'axios'


const URI = 'http://localhost:7777/api'

const SignIn = (logindata) => axios.post(URI + '/auth/login', { logindata })
const SignUp = (registerdata) => axios.post(URI + '/auth/register', { registerdata })

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