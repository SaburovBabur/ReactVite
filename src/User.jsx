function User() {
  const user = {
    firstName: 'Babur',
    lastName: 'Saburov',
    job: 'React FE Developer',
    age: 25,
    isAdmin: false,
  }

  return (
    <div className='flex items-center justify-between px-20 py-10'>
      Hi, My name is {user.lastName.toUpperCase()}{' '}
      {user.firstName.toUpperCase()}, I work as a {user.job}
      <h1 className='font-bold'>
        {(() => {
          if (user.age > 18) {
            return 'I can drive'
          }

          return 'I cannot drive'
        })()}
      </h1>
    </div>
  )
}

export default User
