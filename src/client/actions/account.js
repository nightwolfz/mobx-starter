import find from 'lodash/fp/find'
import isEmpty from 'lodash/fp/isEmpty'

/**
 * @name Account
 * @class Account
 */
export default class Account {

    constructor(state, request) {
        this.state = state
        this.request = request
    }

    isLoggedIn = () => !isEmpty(this.state.account)

    find = username => find(this.state.users, { username })

    login = params => this.request('api/account/login', params)
       .then(account => {
           this.state.account = account
           document.cookie = 'token=' + account.token;
       })

    logout = () => this.request('api/account/logout')
        .then(() => {
           if (this.state.account) {
             this.state.account = null
             document.cookie = 'token='
           }
           window.location.href = '/'
        })

    register = (params) => this.request('api/account/register', params)
				.then(account => this.state.account = account)
}
