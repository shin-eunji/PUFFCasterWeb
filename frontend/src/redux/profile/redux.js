import {createActions, createReducer} from "reduxsauce";

const initialState = {
    popupProfile: false,
    popupPlan: false,
}

export const Action = createActions({
    updateState: ['state'],
}, {prefix: 'profile'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})
