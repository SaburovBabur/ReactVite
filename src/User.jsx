import React from 'react'

function User(props) {
  
  return (
    <>
      <ul className='p-20'>
        <li>Ism: {props.firstName}</li>
        <li>Job: {props.job}</li>
        <li>Age: {props.age}</li>

        <button onClick={props.sayHi}>Salom 👋</button>
      </ul>
    </>
  )
}

export default User
