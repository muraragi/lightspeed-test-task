import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app.ecwid.com/api/v3/58958138/',
  headers: {
    Authorization: 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'
  }
})
