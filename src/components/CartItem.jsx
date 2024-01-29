
import { FcDeleteDatabase } from 'react-icons/fc';
import { useStateValues } from '../Utils/Provider';


function CartItem({ item }) {

       const [{ cartData}, dispatch] = useStateValues();

       return (<div className='w-11/12 md:ml-10 mx-auto '>
              <div className='flex mt-9 gap-5 border-b mb-2 border-black' >
                     <img className='h-[180px] object-contain w-[180px] mb-4' src={item.image}></img>
                     <div className=''>
                            <h1 className='font-semibold py-2'>{item.title}</h1>
                            <p className='text-gray-700 w-7/12'
                            >{item?.description?.substring(0, 100) + "..."}</p>

                            <div className='flex w-10/12 justify-between ml-5 mt-5 mb-5 text-green-700'>
                                   <p>${item.price}</p>

                                   <div onClick={
                                          () => {
                                                 let i = cartData.indexOf(item)
                                                 cartData.splice(i, 1)

                                                 dispatch({
                                                        type: "SET_CART_DATA",
                                                        cartData: cartData,
                                                 })
                                          }
                                   } >
                                          <FcDeleteDatabase className=' text-2xl font-3xl bg-red-100 rounded-full' />
                                   </div>
                            </div>
                     </div>
              </div>

       </div>)

}
export default CartItem;