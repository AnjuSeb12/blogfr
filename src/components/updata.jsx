import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const update = async () => {
  const { update, getUpdate } = useState([])
  const updatedata = await axios.post({


    

  })

  return (
    <div className='font-bold bg-red-200'>
      <div>
        <div>
            <label>updateTitle</label>
            <input type='text'></input>
        </div>
        <div>
            <label>updatepost</label>
            <input type='text'></input>
        </div>
        <button onSubmit={(e)=>getUpdate()}>Submit</button>

      </div>

    </div>

  )
}

export default update