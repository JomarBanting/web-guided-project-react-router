import { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Routes, Route and Link)
import { Routes, Route, Link } from "react-router-dom"
// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    function fetchStock() {
      // this function simulates getting data asynchronously, like axios.get(<URL>)
      return Promise.resolve({ success: true, data })
    }
    // fetching the stock after first render
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Jomar&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to="/">Home</Link>
          <Link to="items-list">Shop</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build Routes, and a Route for each of the components imported at the top */}
      {/* Note that the components will need some props in order to work */}
      {/* Note that the path that renders Item has a URL parameter */}
      {/* Note that the path that renders Item must support nested routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="items-list" element={<ItemsList items={stock}></ItemsList>}>Home</Route>
        <Route path="items-list/:itemID/*" element={<Item items={stock}></Item>}>Home</Route>
      </Routes>

    </div>
  )
}
