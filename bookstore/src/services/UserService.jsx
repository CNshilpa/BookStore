import axios from 'axios'

export const loginApi = (obj) =>
{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",obj)
    return response

}

export const registerApi = (obj) =>
{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",obj)
    return response

}