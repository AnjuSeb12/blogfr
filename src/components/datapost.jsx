import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const datapost = async () => {
  const { post, getPost } = useState([])
  const postdata = await axios.post()

  return (
    <div >
      <div className=' bg-red-100 text-3xl'>
        <label>Title</label>
        <input type='text'></input>
        <label>enter Your new Post:</label>
        <input type='text'></input>
        <button  onSubmit={(e)=>getPost()}>Submit</button>

      </div>

    </div>

  )
}

export default datapost