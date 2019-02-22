import React, {useState} from 'react'
import './calculator.css'
const doKeyPress(e) => doKey(e.)
const Calculator = () => {
    const doClick = (e) => doKey(e.target.value)
    const foo = true;
    return (<div id='calculator'>
        <Display value={displayValue} className='display/>
        {[(foo ?'C':'AC'), ..."±%"].map(c => <Key value={c} className='function'/>)}
        {[..."7894561230."].map(c => <Key value={c} className={`number key${c}`/>)}
        {[..."÷x-+="].map(c => <Key value={c} className='operator'/>)}
        </div>
    )
}
export default Calculator