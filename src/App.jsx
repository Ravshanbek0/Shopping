import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductId from './pages/ProductId'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {
  const [datas, setDatas] = useState([])
  const [navData, setNavData] = useState([])
  const [datas1, setDatas1] = useState([])
  async function getData(link) {
    const req = await fetch(link)
    const data = await req.json()
    setDatas(data)
    setDatas1(data)
  }
  useEffect(() => {
    getData(`https://fakestoreapi.com/products`)
  }, [])
  console.log(navData);
  return (
    <>
      <BrowserRouter>
        <Navbar navData={navData} />
        <Routes>

          <Route path='/productId/:id' element={<ProductId navData={navData} setNavData={setNavData} />} />
          <Route path='/' element={<Header datas1={datas1} setDatas={setDatas} datas={datas} />} />
          <Route path='/product' element={<Products datas1={datas1} setDatas={setDatas} datas={datas} />} />

          <Route path='/cart' element={<Cart setNavData={setNavData} navData={navData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
