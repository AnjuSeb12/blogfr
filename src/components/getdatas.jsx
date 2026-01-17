import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const getdatas= async () => {
  const { data, getdata } = useState([])
  useEffect(()=>{
    const res=axios.get=({
         getdata(res.data)


    })
  },[])
  

  return (
    <div className='font-bold bg-red-200'>
      <div>
       <h1>{data.heading}</h1>
       <p>{data.desc}</p>

      </div>

    </div>

  )
}

export default getdatas