import React, { useState } from 'react'

const Login = ({loginHandler}) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        loginHandler(Email, Password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={Email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className='border-2 required w-75 border-emerald-600 rounded-full py-3 text-xl text-black outline-none placeholder:text-gray-400 px-5'
                type="email" placeholder='Enter Your E-mail'
                />

                <input
                value={Password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className='border-2 required w-75 border-emerald-600 rounded-full py-3 text-xl mt-3 text-black outline-none placeholder:text-gray-400 px-5'
                type="password" placeholder='Enter Password'
                />

                <button className='border-none mt-8 font-semibold w-75 bg-emerald-600 rounded-full py-3 text-xl text-white outline-none px-5'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
