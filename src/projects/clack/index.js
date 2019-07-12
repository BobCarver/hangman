import React, {useState} from 'react'
import images from './images'
import randomize from '../../randomize';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    tile: {
        position: 'absolute',
        maxWidth: '23%',
        maxHeight: '32%',
        transition: 'top 2s, left 2s',
        padding: '5px',
        boxShadow: '0px 0px 20px 0px #aaa'

    },
    board: {
        paddingBottom: '50%', // set 2:1 asspect ration for board
        border: '1px black'
    }
})

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
    const classes = useStyles();

    return (<>
        score {clicks.size}

        <div className={classes.board} style={{ position: 'relative'}}>
            {images.map((image, i) => {
                const y = Math.floor(imageIndx[i]/4),
                    x = imageIndx[i] % 4
                return (
                    <img  className={classes.tile}
                    style={{top: `${33*y}%`, left: `${25*x}%`}}
                    key={i}
                    src={image} alt='' onClick={doClick}/>)
            })}
        </div>
    </>)
}
export default Clack
