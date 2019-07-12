import React from 'react'
//https://www.w3schools.com/howto/howto_css_flip_card.asp

const Card = ({reveal, click, children}) =>
    <div
    onClick={click}
    className='flipper'
    style = {{transform: !reveal?'':'rotateY(180deg)' }}
    children={children}
    />
  export default Card;