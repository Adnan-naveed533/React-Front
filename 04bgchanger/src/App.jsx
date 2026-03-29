import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
   <div className="h-screen w-full duration-200" style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap text-center justify-center bottom-22 inset-x-0 px-2">
      <div  className=" fixed flex flex-wrap justify-center px-3 py-2 rounded-3xl inset-shadow-xl/100  gap-3 ring-2 ring-white" style={{backgroundColor:color}}>
        <button onClick={()=>setcolor("red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl " style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=>setcolor("gray")} className="outline-none px-4 py-1 text-white rounded-full shadow-2xl " style={{backgroundColor:"gray"}}>Gray</button>
        <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:"blue"}}>Blue</button>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
