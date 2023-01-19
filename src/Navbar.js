export default function Navbar(props) {
 
    return (
        <div style={style.navbarParent}>
            <div style={{position:'relative'}}>
                <i style={{fontSize:'20px'}} className="fa-solid fa-cart-shopping"></i>
                <span style={style.numberOfItems}>{props.changeTotalNumberOfItem()}</span>
            </div>

        </div>
    )
}


const style = {
    navbarParent:{
        backgroundColor: 'gray', 
        textAlign: 'right',
        padding:'15px',
        paddingRight:'30px'
     
    },
    numberOfItems:{

        position: "absolute",
        color: "white",
        backgroundColor: "blue",
        bottom: "10px",
        right: "-20px",
        borderRadius: "50%",
        padding: "4px"
    }
}