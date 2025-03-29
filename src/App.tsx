import './App.css'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <ProductGrid />
      </main>
    </div>
  )
}

export default App
