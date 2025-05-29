import { useCallback, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  let [length, setLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pswd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += `!@#$%^&*()_+=-\\[]\{};:,./<>?|~`
    for (let i = 1; i <= length; i++) {
      pswd += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pswd)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(password)
    toast('Password Copied to Clipboard!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, [password])

  return (
    <>
      <ToastContainer>
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      </ToastContainer>
      <div className='w-full h-screen bg-[#131313] py-30 px-8 flex flex-col items-center'>
        <h1 className='text-4xl text-white text-center font-bold mb-4'>Password Generator</h1>
        <div className='flex justify-center items-center w-80 sm:w-xl md:w-3xl focus-within:ring-emerald-600 mb-4'>
          <input
            type='text'
            placeholder="Password"
            className='bg-white grow px-8 py-4 rounded-tl-full rounded-bl-full placeholder:text-lg box-border outline-none focus:outline-none border-white border-2'
            value={password}
            readOnly
          />
          <button className='bg-green-600 px-8 py-4 rounded-tr-full rounded-br-full text-center shrink text-lg text-white cursor-pointer hover:bg-green-700' onClick={() => handleCopy()}>Copy</button>
        </div>
        <div className='flex w-80 sm:w-xl md:w-3xl items-start gap-4 sm:items-center flex-col sm:flex-row sm:gap-16'>
          <div className='flex justify-center items-center gap-4'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(length => e.target.value)}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed(numAllowed => !numAllowed)}
            />
            <label className='text-white'>Numbers</label>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(charAllowed => !charAllowed)}
            />
            <label className='text-white'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

