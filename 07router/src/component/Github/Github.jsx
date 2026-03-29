import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data=>{
    //         setdata(data)
    //     })
    // },[])
    return (
        <div className='bg-gray-600 text-3xl text-center text-white p-4 m-4  '>Github Follower: {data.followers}
        <img className=' ' src={data.avatar_url} alt="Git picture" width={250}/>
        </div>
    )
}

export default Github
 
export const infoData=async() =>{
   const response= fetch('https://api.github.com/users/hiteshchoudhary')
   return (await response).json()
}