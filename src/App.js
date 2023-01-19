import './App.css';
import Cart from './Cart'
import Navbar from './Navbar';
import React from 'react'
import db from './firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      isLoading:true,
      isAddProductFormOpen:false
    }

  }
  componentDidMount(){
    //  db.collection('products')
    //  .get()
    //  .then((snapshot)=>{
    //   const products=snapshot.docs.map((doc)=>{
    //     let data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })
    
    //   this.setState({products:products, isLoading:false})
    //  })

    db.collection('products')
    .onSnapshot((snapshot)=>{
      const products=snapshot.docs.map((doc)=>{
        let data=doc.data();
        data['id']=doc.id;
        return data;
      })
    
      this.setState({products:products, isLoading:false})
     })

     

  }

  changeTotalNumberOfItem=()=>{
    let numberOfItem=0;
    this.state.products.forEach((ele)=>numberOfItem+=ele.qty);
    return numberOfItem;
  }
  increaseQuantity=(product)=> {
    const {products}=this.state;
    let index = products.indexOf(product);
    const docRef=db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log("product is updated")
    })
    .catch((err)=>{
       console.log("err in updating product", err)
    })

  }
  decreaseQuantity=(product)=> {
    const {products}=this.state;
    let index = products.indexOf(product);
    if(products[index].qty>=0){

      const docRef=db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("product is updated")
    })
    .catch((err)=>{
       console.log("err in updating product", err)
    })
    }

  }
  deleteProduct=(id)=> {
   const docRef=db.collection('products').doc(id);
   docRef
   .delete()
   .then(()=>{
    console.log("product is deleted")
  })
  .catch((err)=>{
     console.log("err in deleting product", err)
  })

  }
  changeTotalPrice(){
       let price=0;
       this.state.products.forEach((ele)=>price+=(ele.price*ele.qty));
       return price;
  }
  render() {
    return (
      <>
      <Navbar
      changeTotalNumberOfItem={this.changeTotalNumberOfItem} 
      />
        <Cart
        products={this.state.products} 
        increaseQuantity={this.increaseQuantity} 
        decreaseQuantity={this.decreaseQuantity} 
        deleteProduct={this.deleteProduct} 
        />
       
        <div>
          Total Price -: {this.changeTotalPrice()}
        </div>
        {this.state.isLoading && <h1>Loading</h1>}
      </>
    )
  }
}

export default App;
