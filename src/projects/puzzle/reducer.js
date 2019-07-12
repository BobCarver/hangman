import reducer from "../match/reducer";
import xxx from "../hangman";

export default reducer;
const reducer = (state, action) => {
    const [empty, tiles] = state
    if( empty % 4 === action % 4) { // same in y
inc = 4 or -4
from empty to action-1
look for tile and set x,y to empty
    } else if ( Math.floor(empty / 4) === Math.floor(action / 4)){
inc = 1 or -1
    } else return state
}