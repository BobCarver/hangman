// sets up the reusable FriendCard component
import React from 'react'
import './card.css'
import backImage from './images/card_back.png'
import { isUndefined } from 'util';
import randomize from '../randomize'

for(i=1; i <= 52; i++) {
  import frontImages[i] from `./images/${i}.svg`
}
import randomize from '../../randomize';
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
let init = randomize( x.).slice(1,8)
randomize(init+init)

const Card = ({reveal, index, click}) => {
  const [revealed, setRevealed] = useState([])
  const [currentCard, setCurrentCard] = useState(undefined)
  const [score, setScore] = useState(0)

  const newGame = () => {
    setScore(0);
    setCurrentCard(undefined)
    setRevealed([])
  }

  const doClick = (card) => {
    if( revealed.includes(card)) return;
    setRevealed( revealed + [card])
    if( !currentCard ) {
      setCurrentCard(card)
    } else if( currentCard === card) { // TODO value
      setScore(scored+1)
      setCurrentCard(undefined)
    } else {
      setTimeout(() => {
        setRevealed( revealed.filter( c=> ![currentCard, card].includes(c)))
        setCurrentCard(undefined)
      }, 1000)
    }


  }
return (<>
  score {score}
  <div
    className={`flip-container ${reveal && ' reveal'}`}
    onClick={e => click(index)}
  >
    <div className='flipper'>
      <img className='front' alt='' src={fromImages[value]} />
      <img className='back' alt='' src={backImage} />
    </div>
  </div>)
  </>
}


export default Card
