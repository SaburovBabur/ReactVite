import React, { useState } from 'react'

function Bg() {
  // State
  const colors = ['red', 'blue', 'green', 'pink']
  const [bgColor, setBgColor] = useState('red')

  function changeColor() {
    const randomNum = getRandomInt(0, colors.length - 1)

    console.log(randomNum)

    setBgColor(colors[randomNum])
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className='w-screen h-screen flex items-center justify-center'
      >
        <button
          onClick={changeColor}
          className='bg-white border border-gray-500 rounded-full text-sm py-3 px-3'
        >
          Change BG Color
        </button>
      </div>
    </>
  )
}

export default Bg
