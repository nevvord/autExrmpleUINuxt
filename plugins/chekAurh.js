import Axios from "axios"

export default async function ({ store }) {
    body = { token: localStorage.getItem('token') }

    return await Axios.post(process.env.baseUrl + '/refresh', body)
        .then(res => {
            store.state.auth = res.data.auth
        })
        .catch(err => console.log(err.response.data))
}