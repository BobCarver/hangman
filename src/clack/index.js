import React, {useState} from 'react'
import images from './images'
import './clack.css'
import randomize from '../randomize';

const boardStyle = {
    display: 'grid',
    backgroundColor: '#BBAD9F',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1em'
}
const initial = randomize([0,1,2,3,4,5,6,7,8,9,10,11])

const Clack = () => {
    const [ clicks, setClicks] = useState(new Set())
    const [imageIndx, setImageIndx] = useState(initial)
    const doClick = (e) => {
        if( !clicks.has(e.target.src)) {
            setClicks( (new Set(clicks)).add(e.target.src) )
            setImageIndx( randomize(imageIndx))
        }
    }
    return (<>
        score {clicks.size}

        <div style={boardStyle}>
            {imageIndx.map(indx =>
            <img key={indx} src={images[indx]} alt='' onClick={doClick}/>)}
        </div>
    </>)
}
export default Clack;