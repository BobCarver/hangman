// sets up the reusable FriendCard component
import React, { useReducer, useEffect } from 'react'
import randomize from '../../randomize'
import reducer from './reducer'

const delay = ms => new Promise(res => setTimeout(res, ms))
const x = Array.from(new Array(52), (_, i) => i + 1);

reducer = (state, action => {
    if( action === undefined) return {...state, picked:Array.fill}
    if ( state.picked.includes(action)) return state
    if( state.values.includes(action)) {
        return( {...state, picked: [...picked, action]})
    }
})
const Match = () => {
  const [{currentCard, revealed}, dispatch] = useReducer(reducer, {currentCard:[], revealed:[]})
  useEffect(() => {
    if( currentCard.length === 2 && cards[currentCard[0]] !== cards[currentCard[1]]) {
      delay(1000).then(_ => dispatch('no-match'))
    }
  }, [currentCard] );
  // compute score
  const count = Array(52).fill(0)
  for( const e of revealed) count[cards[e]]++
  const score = count.reduce(((a,e) => e===2?a+1:a ),0)

  const onClick = (card) => dispatch(card)

  return (<>
  <div style={{
    maxWidth: '100%',
    maxHeight: '90%',
    display: 'grid',
    margin: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
}}>

{squares.map((color, indx) => <>
    <div key={indx} style={{background: color} onClick={()=>doClick(indx)}}
  )}
  </>
  )
}
export default Memory;