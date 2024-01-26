
const Card = ( {item}) =>
{
    return (<div className=" cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
<div className="h-[15rem] w-[10rem]"
>
    <img  className="object-cover object-top w-full rounded-md h-full "
 alt=""  src={item.image}></img>

</div>
<div className="p-4"> 
<h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
<p className="mt-2 text-sm text-gray-500 ">{item.topLavelCategory}</p>

</div>
    </div>)
}
export default Card;