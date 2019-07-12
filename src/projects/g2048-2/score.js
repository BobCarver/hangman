import React from 'react'

const Score = ({newScore}) => {
    const [score, setScore] = useState(undefined)
    const delta = score && newScore-score
    setScore(newScore)
    return <>
        {delta &&<span>{delta}</span>} // css set to transition
        <div>{newScore}</div>
    </>

}
useEffect( )
let element = document.getElementById("slidingMenu");
element.addEventListener("transitionend", function(event) {
  element.innerHTML = "Done!";
}, false)