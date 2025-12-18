import './App.css'
import Card from './components/Card.tsx'
import Counter from './components/Counter.tsx'
import OrderForm from './components/OrderForm.tsx'
import ProductCard from './components/ProductCard.tsx'

function App() {

  return (
    <>
      <div>
      <h1>Products</h1>
      <ProductCard name='Samsung Galaxy S25 Ultra' price={89000} isBestSeller={true} />
      <ProductCard name='I-Phone 16 Plus' price={120000} />
      <ProductCard name='Cosmic Byte Headphone' price={2500} isBestSeller={true} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <OrderForm submit={(order) => {
          console.log(`Order Placed for ${order.name} - quantity:${order.quantity}`);
        }} />
      </div>
      <div>
        <Card title='Mamoon Ahmad' footer={<button>Order Now</button>} />
      </div>
    </>
  )
}

export default App
