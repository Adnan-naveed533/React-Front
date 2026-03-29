import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [allonumber,setnumber]=useState(false);
  const [allochar,setchar]=useState(false);
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)
const passwordgen=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(allonumber) str+="0123456789"
  if(allochar) str+="';:+=-_*()&^%$#@!~`<>?/.,|}{"
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)

},[length,allonumber,allochar,setPassword])
useEffect(()=>{
  passwordgen()
},[length,allonumber,allochar,passwordgen])
const copypass=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,9)
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
     <div className="w-full max-w-2xl shadow-2xl text-orange-500 bg-gray-700 my-8 px-12 py-9 mx-auto flex flex-col justify-center  rounded-2xl ">
      <h1 className="text-white text-center my-3">Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white rounded-2"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copypass}
        className=' outline-none bg-blue-500 text-white shrink-0 px-3 py-0.5'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          value={length}
          min={1}
          max={10}
          className=' cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="numberInput" 
          defaultChecked={allonumber}
          onChange={()=>{
            setnumber((prev)=>!prev)
          }}
                   
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={allochar}
          id="charInput" 
          onChange={()=>{
            setchar((prev)=>!prev)
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
