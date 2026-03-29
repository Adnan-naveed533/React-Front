import { useState } from 'react'
import './App.css'
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)
  let arry=[1,2,4]
  return (
    <>
     <h1 className='bg-green-400 rounded-xl p-6 text-black'>Tailwind New Project</h1>
   <Card username="Chai " btntext="See "/>
   <Card username="Code" btntext="More"/>
   <Card username="Usman" btntext="More"/>
   <Card username="Imran" btntext="More"/>
   <Card username="Adnan" btntext="More"/>
   <Card username="Abdullah" btntext="More"/>
   
    </>
  )
}

export default App
