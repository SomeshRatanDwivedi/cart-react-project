import CartItem from "./CartItem"

export default function Cart(props) {
    const { products, increaseQuantity, decreaseQuantity, deleteProduct } = props
    

    return (
        <>
        <ul>
            {
                products.map((ele)=>{
                    return(
                        <CartItem 
                        product={ele}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={ decreaseQuantity}
                        deleteProduct={deleteProduct}
                        key={ele.id}
                        
                        />
                    )
                })
            }
        </ul>
          
        </>
    )

}



