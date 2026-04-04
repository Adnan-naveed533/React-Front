import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")

  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  })


  return (
    <>
     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    
                <div className="bg-white dark:bg-gray-700 transition-all duration-500">
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </div>
      </ThemeProvider>
    </>
  )
}

export default App
