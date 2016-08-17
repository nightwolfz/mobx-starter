import { getAccount } from '../actions/account';
import { createServerState } from '../../client/state'
import actions from '../../client/actions'

/**
 * Middleware for creating the context
 * @param req
 * @param res
 * @param next
 */
export default async function(req, res, next) {
    // Get our token from headers (server) or cookies (client)
    req.token = req.headers.token || req.cookies.token

    // Add state & session data
    const state = createServerState()
    state.app.hostname = req.headers.host

    // Check if logged in
    const account = await getAccount(req.token)
    if (account) {
        state.account = account
    }

    // Create the context
    req.context = {
        state,
        store: actions(Object.assign({}, state, { token: req.token }))
    }
    next()
}
