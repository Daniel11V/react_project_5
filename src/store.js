import { createStore } from "redux";

const initialState = {
    breakLength: 5,
    session: 25
}

const reducerCon = (state = initialState, action) => {
    switch (action.type) {
        case 'BREAK_CHANGE':
            if (action.up) {
                return { ...state, breakLength: state.breakLength + 1 }
            } else {
                return { ...state, breakLength: state.breakLength - 1 }
            }
        case 'SESSION_CHANGE':
            if (action.up) {
                return { ...state, session: state.session + 1 }
            } else {
                return { ...state, session: state.session - 1 }
            }
        default:
            return state
    }
}

export default createStore(reducerCon);