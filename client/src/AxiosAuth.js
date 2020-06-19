import axios from 'axios'

export const axiosWithAuth = (props) => {

    const token = localStorage.getItem('token')

    return axios.create({
        headers: { authorization: token }
    })
}