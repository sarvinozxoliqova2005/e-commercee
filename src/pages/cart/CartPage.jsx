import React, { useContext } from 'react'
import { CartContextCard } from '../../hooks/CartContext'
import { Link } from 'react-router-dom';

const CartPage = ({el}) => {
  const {cart , increase , decrease} = useContext(CartContextCard);
  return (
   <>
    <section >
      <div className='container mx-auto p-5 pt-[60px]  flex items-center gap-5 max-w-[1400px] w-full'>
        <div className='w-[70%] p-5 flex flex-col gap-5 '>
          {
            cart?.map((el) => (
              <div className='rounded-2xl p-5 border-[2px]  border-gray-400 shadow-xl hover:shadow-orange-500 duration-500  flex items-center justify-between'>
                <img className='w-[100px]' src={el.thumbnail} alt="" />
                <div className='flex items-center gap-5'>
                  <h1 className='text-[24px] font-bold text-orange-500'> $ {el.price}</h1>
                  <div className='flex items-center gap-1'>
                    <button onClick={() => decrease(el)} className='bg-orange-500 px-5 cursor-pointer py-2 rounded-lg text-white font-bold text-[20px]'>-</button>
                    <span className='border-[2px] border-orange-500 px-5 py-1.5 rounded-lg text-[20px] text-orange-500 font-bold'>{el.qty}</span>
                    <button onClick={() => increase(el)} className='bg-orange-500 px-5 cursor-pointer py-2 rounded-lg text-white font-bold text-[20px]'>+</button>
                  </div>
                  <p className='text-[24px] font-bold text-orange-500'> $ {(el.price * el.qty).toFixed(2)}</p>
                </div>
              </div>
            ))
          }
        </div>
        
        <div className='p-5 rounded-2xl w-[30%] h-full border-[2px] border-gray-400'>
          <h1 className='text-[24px] font-bold'>Card Totals</h1>
          <div className="flex justify-between text-[20px] mt-5">
        <span className='text-[20px]'>Shipping</span>
        <span className='text-[20px] text-orange-500'>Free</span>
      </div>
      <div className="flex justify-between text-[20px] mt-3">
        <span className='text-[20px]'>Discount</span>
        <span className='text-[20px] text-orange-500'>$24</span>
      </div>
          <div className='flex items-center justify-between gap-3 my-4'>
             <p className='text-[20px] '>Total:</p>
             <p className='text-[20px]  text-orange-500'>
              $ 
              {
                cart.reduce((sum , el) => {
                  sum +=el.price * el.qty
                  return Math.ceil(sum)
                } ,0)
              }
             </p>         
           </div>
             <Link to={`/order`} className='bg-orange-500 flex items-center justify-center px-5 cursor-pointer py-2 rounded-2xl text-white font-bold text-[20px] mt-4'>Order now</Link>
        </div>
      </div>
    </section>
   </>
  )
}

export default CartPage