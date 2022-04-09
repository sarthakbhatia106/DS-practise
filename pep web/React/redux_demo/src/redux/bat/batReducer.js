const BUY_BAT = 'BUY_BAT';
const SELL_BAT = 'SELL_BAT';

const initialState = {
    numberOfBats: 20
}

const BatReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BAT:
            return { ...state, numberOfBats: state.numberOfBats - action.payload }
        case SELL_BAT:
            return { ...state, numberOfBats: Number(state.numberOfBats) + Number(action.payload) }
        default:
            return state
    }
}
export default BatReducer;