import { useEffect, useState } from "react"

function ProductFilter() {
    const [products, setProducts] = useState([])
    console.log(products)
    const[items,setItmes]=useState(products)
    const filterItems=(catItem)=>{
          const updatedItems= products.filter((curItem)=>{
                return curItem.category===catItem
            })
            setItmes(updatedItems)         
    }
    useEffect(() => {
        async function fetchProducts() {
            try{
                const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            }
            catch(error){   
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    },[])
  return (
    <div className='container mt-5'>
      <h1>All Products</h1>
       <button type="button" className="btn btn-danger me-4"
       onClick={()=>setItmes(products)}>All Products</button>
           <button type="button" className="btn btn-danger me-4"
           onClick={()=>filterItems("men's clothing")}>Men's Clothing</button>
               <button type="button" className="btn btn-danger me-4"
               onClick={()=>filterItems("women's clothing")}>Women's Clothing</button>
                   <button type="button" className="btn btn-danger me-4"
                   onClick={()=>filterItems("electronics")}>Electronics</button>
                       <button type="button" className="btn btn-danger"
                       onClick={()=>filterItems("jewelery")}>Jewelery</button>
    <div className="row mt-4">
        {items.map((val)=>{
            return(
                <div className="card card1" style={{width: "18rem"}}>
  <img src={val.image} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.title.substring(0,20)}</h5>
   <p className="card-text">Price:{val.price*95}</p>
   <p className="badge bg-success text-wrap">{val.category}</p>
   <br></br>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
            )
        })}

    </div>
    </div>
  )
}

export default ProductFilter