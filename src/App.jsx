import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import NotFountd from './components/NotFound/NotFountd'
import RegisterPage from './pages/RegisterPage'
import { ToastContainer } from 'react-toastify'
import database from './firebase.config'
import RestPassword from './components/restPassword/RestPassword'



function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<LoginPage/>}/>
        <Route path='/register' element ={<RegisterPage/>}/>
        <Route path='/restPassword' element ={<RestPassword/>}/>
        <Route path='*' element ={<NotFountd/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router ={route}/>
      <ToastContainer />
    </>
  )
}

export default App
