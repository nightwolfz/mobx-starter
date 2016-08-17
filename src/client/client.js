import '../shared/polyfills'
import '../shared/console'
import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Router, RouterContext, browserHistory } from 'react-router'
import Context from './components/Common/Context'
import routes from './routes'
import { createClientState } from './state'
import actions from './actions'

// This is the entry point for our client-side logic
// The server-side has a similar configuration in `src/server/routes/render.js`
if (process.env.BROWSER) {
    // Import our styles
    require('../assets/css/index.scss')
}

// Initialize stores & inject server-side state into front-end
const state = createClientState()
const context = {
    state,
    store: actions(state)
}

function createElement(props) {
    return <Context context={context}>
        <RouterContext {...props} />
    </Context>
}

function renderApp() {
    render(<Router
        history={browserHistory}
        render={createElement}
        routes={routes(context)}
    />,
    document.getElementById('container'))
}

// Render HTML on the browser
renderApp()

// Use hot-reloading if available
if (module.hot) {
    module.hot.accept(() => renderApp())
}
