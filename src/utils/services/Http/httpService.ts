import axios from 'axios'

const http = axios.create({
    baseURL: process.env.API_URL,
    timeout: 6000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    },
})

export { http }
