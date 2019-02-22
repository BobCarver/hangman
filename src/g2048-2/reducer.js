
const compare = new Map([
    ['up',    {f:(a,b) =>a.y -b.y + 4*(a.x-b.x), d: 'y', base:0, inc:1}],
    ['down',  {f:(a,b) =>b.y -a.y + 4*(b.x-a.x), d: 'y', base:3, inc:-1}],
    ['left',  {f:(a,b) =>a.x -b.x + 4*(a.y-b.y), d: 'x', base:0, inc:1}],
    ['right', {f:(a,b) =>b.x -a.x + 4*(b.y-a.y), d: 'x', base:3, inc:-1}]
])

let id = 0;
const reducer = (state, action) => {
    if(action === 'new-game') {
        id=0;
        return reducer({score:0, tiles:[]},'left')
    }
    if( compare.get(action) === undefined) return state
    const {f, d, base, inc} = compare.get(action)

    let {score, tiles} = state
    const ordered = tiles.map(cell => ({...cell})).sort(f)
    console.log('after sort ordered = ',ordered)
    const avail = new Set([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

    let k = base;
    for(let i=0; i < ordered.length; i++) {
        const e = ordered[i], next = ordered[i+1]

        e[d] = k
        k += inc
        avail.delete(e.y*4+e.x)
        if(next === undefined) break;
        if(e[d] !== next[d]) {
            k=base;
        } else if( e.value === next.value) {
            score += e.value
            e.value *= 2
            ordered.splice(i+1,1)
        }
    }
    const newCellIndx = Array.from(avail.values())[Math.floor(Math.random()*avail.size)]
    ordered.push( {
        key: id++,
        value: Math.random()>.5?4:2,
        x: newCellIndx % 4,
        y: Math.floor((newCellIndx/4))
    })
    console.log('after collapse = ',ordered)
    return {tiles:ordered.sort((a,b)=>a.key-b.key), score}
}
export default reducer;