import { useState } from "react"
import { useEffect } from "react"
import "./products.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Products() {
  const [products, setProducts] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        // .then(res => res.json())
        .then((result)=>{setProducts(result.data.products)});
    }, [])
    console.log(products);

    const filterProducts = products.filter((i)=>{
      return i.title.toLowerCase().includes(searchItem.toLowerCase())
    })


  return (
    <>
    <section className="image " id="about">
      <div className="container">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 text-center">

      <img src="/public/pexels-lywin-55237728-14230225.jpg" alt="image" className="w-100 rounded" />
          </div>
          <div className="col-md-6 text-center">
            <h3>About Our Products</h3>
        <p>We offer a wide range of products to suit your needs.</p>
        <p className="text-primary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi voluptas earum aliquid dolor ad iure consequatur, molestiae quisquam odio illum, at atque ratione repellat tempore! Quidem, aut! Dignissimos, corrupti perspiciatis.</p>

          </div>

        </div>
      </div>

    </section>
    {/* -------------------------------------------- */}


      <div className="container">
        <div className="row" name ="theproducts">
          <input onChange={(e)=> setSearchItem(e.target.value)} type="text" className="form-control" placeholder="Search" />
    {filterProducts.map((i)=>{
      return(
        

        <div key={i.id} className="col-md-4 text-center mb-5 containerProducts">
          <img src={i.thumbnail} className="w-100"/>
          <h3>{i.title}</h3>
          <h4>{i.price}</h4>
          <button
          className="btn btn-primary"
          onClick={()=> navigate(`/products/${i.id}`)}
          >Details</button>
        </div>



)
})}
</div>
</div>
    </>
  )
}

export default Products