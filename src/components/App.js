import { useEffect, useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.jpeg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.getItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
					<img src={logo} alt='Le jardin des roses' className='lmj-logo'/>
					<h1 className='lmj-title'>Le jardin des roses</h1>
			</Banner >
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} /> 
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer/>
		</div>
	)
}

export default App