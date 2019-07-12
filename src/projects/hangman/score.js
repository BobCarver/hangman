import React from 'react'
 const style = {
    fill: 'none',
    stroke: "#000",
    strokeWidth:'2px',

 }
const score = ({wrong, gameOver}) => (
<svg width="100%" height="100%" viewBox="80 0 360 560" version="1.1" xmlns="http://www.w3.org/2000/svg"
style= {style}>
{wrong >= 0 && <path d="M80,560l280,0M160,560l0,-480l180,0l0,60" />}
{wrong >= 1 && <circle cx="340" cy="180" r="40" />}
{wrong >= 2 && !gameOver &&
<circle cx="325" cy="165" r="5" />}
{wrong >= 3 && !gameOver &&
<circle cx="355" cy="165" r="5" />}
{wrong >= 4 && !gameOver  &&
<path d="M325,200c15.291,12.15 22.133,4.898 30,0" />}
{wrong >= 5 && <path d="M340,220l0,140"/>}
{wrong >= 6 && <path d="M340,260l100,-40" />}
{wrong >= 7 && <path d="M340,260l-100,-40" />}
{wrong >= 8 && <path d="M340,360l100,120" />}
{wrong >= 9 && <>
    <path d="M340,360l-100,120" />
    <path d="M320,160l10,10M330,160l-10,10M360,160l-10,10M350,160l10,10M325,200l30,0" />
    </>
}

</svg>
)
export default score;