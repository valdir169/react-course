import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListOfUsers from './components/ListOfUsers'
import CreateNewUser from './components/CreateNewUser'

function App() {

  return (
    <>
      <h1>Crud React Redux</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListOfUsers />} />
          <Route path='/create-user' element={<CreateNewUser />} />
          <Route path='/edit-user/:UserId' element={<CreateNewUser />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App