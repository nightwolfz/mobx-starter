import { observable, extendObservable, asFlat, toJS } from 'mobx'

// Default state structure
let defaultState = observable({
    app: {
        title: 'Mobx-starter',
        statusCode: 200,
        hostname: 'localhost'
    },
    account: {},
    todos: {
        loading: false,
        items: asFlat([])
    }
})

// Export function that creates our state
export function createServerState() {
    return toJS(defaultState)
}

export function createClientState() {
    if (process.env.BROWSER) {
        // Update our state
        Object.keys(window.__STATE).forEach(key => {
            extendObservable(defaultState[key], window.__STATE[key])
        })
        // For debugging purposes
        window.__STATE = defaultState

        return defaultState
    }
}
