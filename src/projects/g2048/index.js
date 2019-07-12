import React, {useReducer} from 'react'
import './g2048.css'

const transpose = (a) => a[0].map((col, i) => a.map(row => row[i]));

const trans = []
trans['left'] = [[0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15]]
trans['right'] = trans['left'].map(v=>[...v].reverse())
trans['up'] = transpose(trans['left'])
trans['down'] = trans['up'].map(v=>[...v].reverse())
console.log(trans)

const slide = ({tiles:oldTiles, gameOver, score}, action ) => {
    const avail = [];
    const tiles = [...oldTiles]
    console.log({oldTiles, gameOver, score, action})// use transformation matrix

    for( const row of trans[action])  {
        console.log(row)// use transformation matrix
        const n = row.map(i => tiles[i]).filter(e => e !== 0).concat([0,0,0,0]) // filter empties
 console.log('after slide ', n)
        for(let i=0; n[i] !== 0; i++) {
            if( n[i] === n[i+1]) {
                score += n[i]
                n.splice(i,2,n[i]*2)
            }
        }
        console.log('after match ', n, ' row =', row)
        row.forEach((e,i) => {
            if( n[i] === 0) avail.push(e)
            tiles[e] = n[i]
        })
    }
    gameOver =  0 === avail.length
    if( !gameOver) {
        tiles[Math.floor(Math.random()*avail.length)] = Math.random() > .5 ? 2:4
    }
    console.log({tiles, gameOver, score})
    return {tiles, gameOver, score}
}

const init = () => slide({score:0, gameOver:false, tiles: Array(16).fill(0)},'left')
const G2048 = () => {
    const [{ score, tiles, gameOver }, dispatch] = useReducer(slide, undefined,init )

    return <>
        score {score}
        {['left', 'right', 'up', 'down'].map( direction =>
            <button key={direction} onClick={() => dispatch(direction)}>
                {direction}
            </button>
        )}
        <div className='game'>
            {tiles.map((tile, i) =>
                <div key={i} className={`t${tile}`} children={tile}/>
            )}
        </div>
        gameOver {gameOver}
    </>
}

export default G2048;
