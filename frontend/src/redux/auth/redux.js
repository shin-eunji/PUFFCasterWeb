import {createActions, createReducer} from "reduxsauce";

const initialState = {
    openSidebar: false,
}

export const Action = createActions({
    updateState: ['state'],
    signUp: ['data'],
    signIn: ['data'],
},{prefix: 'AUTH'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})
