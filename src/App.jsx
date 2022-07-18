import { useState } from 'react'

function App() {
  // Single source of thruth
  let [name, setName] = useState('Shoaziz')

  function changeHandler(e) {
    setName(e.target.value)
  }

  return (
    <>
      <h1>Ism: {name}</h1>

      <input type={'email'} placeholder='email' />
      <input type={'password'} placeholder='password' />
      <button>Register</button>
    </>
  )
}

export default App
