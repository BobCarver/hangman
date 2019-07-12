import React, { useReducer } from 'react'
import './calculator.css'
import reducer from './reducer'

const Display = ({ value }) => <div className='display'>{value}</div>

const Key = ({ value, ...props }) => (
  <div className='key' {...props}>
    {value}
  </div>
)

export default () => {
  const [{ top, stack }, dispatch] = useReducer(reducer, { top: '', stack: [] })
  const displayValue = top === '' ? stack[0] || '0' : top

  return (
    <div className='calculator'>
      <Display value={displayValue} />
      <div className='grid-container'>
        {[true ? 'C' : 'AC', ...'±%÷', ...'789x456-123+.0', 'enter'].map(c => (
          <Key value={c} key={c} onClick={e => dispatch(e.target.innerText)} />
        ))}
      </div>
    </div>
  )
}
