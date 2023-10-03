import { useParams } from 'react-router-dom'

function ProductDetailPage () {
  const params = useParams()

  return(
    <div>
      <h1>Product Detail for {params.productId}</h1>
    </div>
  )
}

export default ProductDetailPage