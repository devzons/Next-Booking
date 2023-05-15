import React from 'react'

export default function Form() {
  return (
    <div className='mt-5 md:mt-10 flex flex-wrap justify-between w-full'>
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4'
        placeholder='First name'
      />
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4 md:ml-[2%] ml-0'
        placeholder='Last name'
      />
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4'
        placeholder='Phone number'
      />
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4 md:ml-[2%] ml-0'
        placeholder='Email'
      />
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4'
        placeholder='Occasion (optional)'
      />
      <input
        type='text'
        className='border rounded p-3 w-full md:w-[49%] mb-4 md:ml-[2%] ml-0'
        placeholder='Requests (optional)'
      />
      <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'>
        Complete reservation
      </button>
      <p className='mt-4 text-sm'>
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  )
}
