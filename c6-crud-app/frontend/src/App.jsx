// import React from 'react'
import routes from '../routes/index.js'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map(({path, element}, index) => {
            <Route key={index} path={path} element={element} />
          })
        }
      </Routes>
    </div>
  )
}

export default App
