import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import './index.css'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'



function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)


  return (
    <>
      <Header/>

      <Products products={filteredProducts} />
    </>
  )
}

export default App
