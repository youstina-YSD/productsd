import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((result)=>{setProduct(result.data)})
    },[id])
  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center flex-column">
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt="image" />
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="btn btn-primary" onClick={()=> navigate(-1)}>Back</button>
        </div>
    </div>
    </>
  )
}

export default ProductDetails