
let id = 0; //id counter for new tiles
const newTile = (position) => ({
    id: id++,
    x: position%4,
    y: Math.floor((position/4)),
    value: Math.random()>.5?4:2,
})

const slide = (tiles, action ) => {
    const {maj,min,reverse} = {
        left: {maj: 'y', min: 'x', reverse: false},
        right:{maj: 'y', min: 'x', reverse: true},
        up:   {maj: 'x', min: 'y', reverse: false},
        down: {maj: 'x', min: 'y', reverse: true},
    }[action],
    acc = [[],[],[],[]]

    for( const e of tiles) acc[e[maj]].push(e)

    for(const line of acc) {
        line.sort( (a,b) => a[min]-b[min]* (reverse?-1:1))
        let dups = 0
        for(let i=0; i < line.length; i++) {
            const newPos = reverse ? 3+dups-i : i -dups
            const setPos = (indx) => { // assign position (slight opt if no change )
                if( line[indx][min] !== newPos) line[indx] = {...line[indx], [min]:newPos}
            }
            setPos(i)
            if( line[i+1] && line[i+1].value === line[i].value) {
                setPos(i+1)
                i++; // skip process i+1
                dups++;
            }
        }
    }
    return [].concat(...acc).sort((a,b) => a.id-b.id)
}

const pos = e => e.y*4+e.x

const dup = ({score, hiScore, tiles}) => {
    const mark = new Map(tiles.map(t=>[pos(t), t]))
    tiles = tiles.filter(t => t === mark.get(pos(t)) ||
        ! (hiScore = Math.max(hiScore, score += mark.get(pos(t)).value *= 2)))

    if( mark.size < 16 ) {
        const avail = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].filter(i=>!mark.get(i))
        const indx = avail[Math.floor(Math.random()*avail.length)]
        tiles.push(newTile(indx))
    }
    return {score, hiScore, tiles}
}

export default (state, action) => {
    switch( action ){
        case 'newGame': return dup({...state, score:0, tiles:[]})
        case 'duplicates': return dup(state)
        case 'left':
        case 'right':
        case 'up':
        case 'down':
            return {...state, tiles: slide(state.tiles, action)}
        default:
            return state
    }
}

// const xx = foo({tiles:[{id:1, x:0, y:0, value:8},
// {id:2, x:0, y:1, value:8},
// {id:3, x:0, y:2, value:4}]}, 'down')
