import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PostList from './pages/PostList'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import ViewPost from './pages/ViewPost'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/view/:id" element={<ViewPost />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App