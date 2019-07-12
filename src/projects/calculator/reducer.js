const isValid = (top) => top !== '' && top !== '.'

const reducer = (state, v) => {

    const {top, stack} = state
    switch(v) {
        case 'AC': return ({top:'', stack:[]});
        case'C': return({top:'', stack});
        case 'enter': return isValid(top) ? { top:'', stack:[top,...stack]} : state
        case '0': if( top === '' ) return state;
        case '.': if(top.includes('.')) return state;
        case '1': case '2': case '3': case '4': case '5':  // fallthrough
        case '6': case '7': case '8': case '9':
            return ({top: top + v, stack})
        default:
    }
    if(top !== '' || top !== '.') {
        switch(v) {
            case '±': return({top:'', stack:[-top,...stack]})
            case '%': return({top:'', stack:[top/100,...stack]})
            default: break;
        }
    }
    if( stack.length > 1) {
        const [op2, ...rest] = stack
        switch(v) {
            case '+': return({top:'', stack:[top+op2,...rest]})
            case '-': return({top:'', stack:[top-op2,...rest]})
            case '/': return({top:'', stack:[top/op2,...rest]})
            case 'x': return({top:'', stack:[top*op2,...rest]})
            default:
        }
    }
    return stack
}
export default reducer;