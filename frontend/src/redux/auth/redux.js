import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    isLoading: true,
    isError: false,
    memoList: null
}

export const Action = createActions({
    updateState: ['state'],
    signUp: ['data'],
    signIn: ['data'],
    signOut: ['data'],
    user: ['data'],
    loaderData: [false]
}, {prefix: 'auth'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) =>
        ({
            ...state,
            ...newState,
        }),

    [Action.Types.LOADER_DATA]: (state, {state: newState}) =>
        ({
            ...state,
            ...newState,
        })
})
