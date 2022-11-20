import { BsCartFill } from 'react-icons/bs';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart-icon-container'>
        <BsCartFill className='cart-icon' />
        <div className='number-items'>3</div>
    </div>
  )
}

export default CartWidget