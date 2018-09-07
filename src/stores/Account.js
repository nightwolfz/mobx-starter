import {action} from 'mobx'
import {size, find} from 'lodash'

export default class Account {

  constructor(request, state) {
    this.request = request
    this.state = state
  }

  isLoggedIn() {
    return size(this.state.account.username)
  }

  // @action find(username) {
  //   return find(this.state.account.users, { username })
  // }

  // @action login(params) {
  //   return this.request.post('api/account/login', params).then(account => {
  //     this.state.account = account
  //   })
  // }

  // @action logout() {
  //   this.request.get('api/account/logout')
  //   this.state.account.username = null
  //   this.state.account.token = null
  // }

  // @action register(params) {
  //   return this.request.post('api/account/register', params).then(account => {
  //     this.state.account = account
  //   })
  // }
}

