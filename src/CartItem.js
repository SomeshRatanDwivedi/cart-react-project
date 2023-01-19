export default function CartItem(props) {
    const { product, increaseQuantity, decreaseQuantity, deleteProduct } = props
    return (
        <>
            <li style={style.li}>
                <div>

                    <img src={product.img} style={{ width: '200px' }}></img>
                </div>
                <div style={{ width: 'calc(100% - 300px)' }}>
                    <h1>{product.name}</h1>

                    <div>
                        <h3>Price</h3>
                        {product.price}
                    </div>
                    <div>
                        <h3>Qty</h3>
                        {product.qty}
                    </div>
                    <div>
                        <span style={style.span} onClick={() => increaseQuantity(product)}><i className="fa-solid fa-plus"></i></span>
                        <span style={style.span} onClick={() => decreaseQuantity(product)}><i className="fa-solid fa-minus"></i></span>
                        <span style={style.span} onClick={() => deleteProduct(product.id)}><i className="fa-solid fa-trash"></i></span>
                    </div>
                </div>


            </li>



        </>
    )

}

const style = {
    li: {

        width: '40%',
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        alignItems: 'center',
        minWidth: '600px'
    },
    span: {
        position: 'relative',
        padding: '10px',
        top: '10px',
        fontSize: '20px',
        cursor: 'pointer'

    }


}