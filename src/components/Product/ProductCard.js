import './ProductCard.css'

const ProductCard = ({data,key}) => {
    return (<div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
            <img  className="h-full w-fll object-cover object-left-top"
           alt='' src={data.image}>
            </img>
        </div>
       <div className="textPart bg-white p-3 ">
        <div>
            <p className="font-bold opacity-60">{data.brand}</p>
            <p className='text-black text-lg font-bold'>{data.title}</p>
        </div>
<div className="flex items-center space-x-3">
<p className="font-semibold">₹{data.discountedPrice}</p>
<p className="line-through  opacity-50">₹{data.price}</p>
<p className="text-green-600 font-semibold">{data.discountPersent}% off</p>
</div>
       </div >
    </div>)
}
export default ProductCard;