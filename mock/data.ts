/**
 * https://github.com/anncwb/vite-plugin-mock/tree/main#readme
 */
import type { MockMethod } from 'vite-plugin-mock'

const user = {
  id: 1,
}

const login: MockMethod = {
  url: '/api/login',
  method: 'post',
  response: (req) => {
    const { account, password } = req
    return { ...user, account, password }
  },
}

export const mocks: MockMethod[] = [login]
