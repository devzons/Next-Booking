interface Props {
  inputs: {
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
    password: string
  }
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSignin: boolean
}

export default function AuthModalinput({
  inputs,
  handleChangeInput,
  isSignin,
}: Props) {
  return (
    <>
      <div className='my-3 w-[90%] md:w-full flex flex-col justify-between text-sm mx-auto'>
        {isSignin ? null : (
          <>
            <input
              type='text'
              className='border rounded p-2 py-3 w-full mb-2'
              placeholder='First Name'
              value={inputs.firstName}
              onChange={handleChangeInput}
              name='firstName'
            />
            <input
              type='text'
              className='border rounded p-2 py-3 w-full mb-2'
              placeholder='Last Name'
              value={inputs.lastName}
              onChange={handleChangeInput}
              name='lastName'
            />
          </>
        )}

        <input
          type='email'
          className='border rounded p-2 py-3 w-full mb-2'
          placeholder='Email'
          value={inputs.email}
          onChange={handleChangeInput}
          name='email'
        />
        {isSignin ? null : (
          <>
            <input
              type='text'
              className='border rounded p-2 py-3 w-full mb-2'
              placeholder='Phone'
              value={inputs.phone}
              onChange={handleChangeInput}
              name='phone'
            />
            <input
              type='text'
              className='border rounded p-2 py-3 w-full mb-2'
              placeholder='City'
              value={inputs.city}
              onChange={handleChangeInput}
              name='city'
            />
          </>
        )}

        <input
          type='password'
          className='border rounded p-2 py-3 w-full mb-2'
          placeholder='Password'
          value={inputs.password}
          onChange={handleChangeInput}
          name='password'
        />
      </div>
    </>
  )
}
