
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
import 'semantic-ui-css/semantic.min.css';



function App() {


  



  return (
<>


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
