import type { MockMethod } from 'vite-plugin-mock'
// import { Random, mock } from 'mockjs'
import { resultError, resultSuccess } from '../util'

const userInfo = ['tom', 'jerry', 'Ricky']
const tokenInfo = {
  token: '1234567890',
  userName: 'Ricky',
  userId: '1',
  role: 'admin',
}
const userlogin = {
  token: '1234567890',
  userName: 'user',
  userId: '0',
  role: 'user',
}

export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => resultSuccess(userInfo),
  },
  {
    url: '/api/login/admin',
    method: 'post',
    response: () => resultSuccess(tokenInfo),
  },
  // 添加一个接口，故意报错404  resultError('404 NOT FOUND',{code:404,{success:false}})
  {
    url: '/api/login/user',
    method: 'post',
    response: () => resultSuccess(userlogin),
  },
  {
    url: '/api/notfound',
    method: 'get',
    response: () => resultError('404 NOT FOUND', { code: 404, data: false }),
  },
  {
    url: '/api/error',
    method: 'get',
    response: () => resultError('一个错误访问', { code: 500, data: false }),
  },
] as MockMethod[]
