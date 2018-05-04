const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TAB-SELECTED':
            return {...state, selected: action.payload}
        case 'TAB-SHOWED':
            return {...state, visible: action.payload}
        default:
            return state
    }
}