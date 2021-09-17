import { createStore } from "redux";

const initialState = {
    breakLength: 5,
    session: 25
}

const reducerCon = (state = initialState, action) => {
    switch (action.type) {
        case 'BREAK_CHANGE':
            if (action.reset) {
                return { ...state, breakLength: 5 }
            }
            if (action.up && state.breakLength !== 60) {
                return { ...state, breakLength: state.breakLength + 1 }
            } else if (!action.up && state.breakLength !== 1) {
                return { ...state, breakLength: state.breakLength - 1 }
            } else { return { ...state } }
        case 'SESSION_CHANGE':
            if (action.reset) {
                return { ...state, session: 25 }
            }
            if (action.up && state.session !== 60) {
                return { ...state, session: state.session + 1 }
            } else if (!action.up && state.session !== 1) {
                return { ...state, session: state.session - 1 }
            } else { return { ...state } }
        default:
            return state
    }
}

export default createStore(reducerCon);