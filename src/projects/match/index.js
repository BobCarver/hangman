// sets up the reusable FriendCard component
import React, { useReducer, useEffect } from 'react'
import images from './images'
import randomize from '../../randomize'
import  './match.css'
import reducer from './reducer'
import Flipper from './flipper'

const delay = ms => new Promise(res => setTimeout(res, ms))
const x = Array.from(new Array(52), (_, i) => i + 1);
const init = randomize( x).slice(0,8)
const cards = randomize([...init,...init])

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
  {score}
  <div style={{
    maxWidth: '100%',
    maxHeight: '90%',
    display: 'grid',
    margin: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridGap: '0.25em'
}}>
  {cards.map( (value,indx) =>
    <Flipper
      reveal={revealed.includes(indx)}
      key={indx}
      click={()=>onClick(indx)}
    >
      <img alt='' src={images[value]}/>
      <img alt='' src={images[0]} />
    </Flipper>)}
    </div>
  </>
  )
}
export default Match;