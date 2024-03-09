
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductLayout from './pages/ProductLayout'
import Product from './pages/Product'
import SingleProduct from './components/SingleProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Cart from './pages/Cart'
import { Profile } from './pages/Profile'
import 'semantic-ui-css/semantic.min.css';
import { createContext, useState } from 'react'
export const AuthContext = createContext();


function App() {

  const [user,setUser] = useState(null);
  const getLogin = async(email,password) => {
    try {
    const token = await login(email,password);
    await localStorage.removeItem('token')
    await localStorage.setItem('token',token)
    const userGet = await getUser()
    setUser(userGet);
    } 
    catch (error) {
      console.log("Login işleminde hata 2 : :" + error);
    }}
    
    const logOut = () => {  
        localStorage.removeItem('token')
        setUser(null)
    
    }
    


  return (
<>
<AuthContext.Provider value={{user,logOut,getLogin}}>
    <Login/>
    <Profile/>
    </AuthContext.Provider>

<BrowserRouter>
   <Routes>


   <Route path='/' element={<Navbar/>} >   

   <Route index element={<Home/>} />
   <Route path='about' element={<About/>} />
   <Route path='login' element={<Login/>}/>
   <Route path='register' element={<Register/>}/>
   <Route path='product/:productId' element={<SingleProduct/>}/>
  <Route path='cart' element={<Cart/>}/>


   <Route path='products' element={<ProductLayout/>}>
   <Route index element={<Product/>}/>
   </Route>
   
   </Route>

   </Routes>
   </BrowserRouter>



</>


 
  )
}

export default App
