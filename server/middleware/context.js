import { useStaticRendering } from 'mobx-react'
import { toJS } from 'mobx'
// import Account from '../models/Account'
import state from '../../src/stores/State'
import context from '../../src/config/context'

useStaticRendering(true)

const stateClone = JSON.stringify(toJS(state))

/**
 * Middleware for creating the context
 * @param ctx
 * @param next
 */
export default async(ctx, next) => {
  // Get our token from headers (server) or cookies (client)
  ctx.token = ctx.headers['token'] || ctx.cookies.get('token')

  // Check if logged in
  // ctx.account = await Account.getAccount(ctx.token)

  // Create state for SSR
  const state = JSON.parse(stateClone)

  // if (ctx.account.id) {
  //   state.account = ctx.account
  // }

  ctx.context = context(state)

  await next()
}
