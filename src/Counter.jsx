import React, { useState } from 'react'

function Counter() {
  // State
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function incrementBy1000() {
    setCounter(counter + 1000)
  }

  function decrementBy1000() {
    setCounter(counter - 1000)
  }

  return (
    <>
      <p>Counter: {counter}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementBy1000}>1000</button>
      <button onClick={decrementBy1000}>-1000</button>
    </>
  )
}

export default Counter
