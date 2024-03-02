import { useContext } from "react"
import { MyContext } from "./context"

export default function Cart(){
    console.log("cart")
    const context=useContext<any>(MyContext)
    const cartItems=context.cartItems
    console.log(cartItems)
    return(
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center mt-5 p-3">
            <p className=" text-green-600 p-2 mt-5 font-bold text-center">Cart Items</p>
        {cartItems.length>0 && cartItems.map((item:string, index:number) => (
            <div className=" bg-slate-200 py-10 rounded-lg px-3">
            <p key={index} className="text-black text-center p-2 font-bold text-xl">{item}</p>
            <div className="flex justify-center gap-7">
           <p>Inside cart</p>
           <RemoveFromCart item={item} />
            </div>
            </div>
        ))}
    </div>
    )
    function RemoveFromCart({item}:{item:string}){
        const { setCartItems } = useContext(MyContext);
        function handleRemove(): void {
            setCartItems((prev: string[])=>prev.filter((x)=>x!==item))
        }
        return(
            <>
            <button className="p-2 font-bold bg-blue-600 text-xs rounded-lg" onClick={()=>handleRemove()}>Remove From Cart</button>
            </>
        )
    }
}