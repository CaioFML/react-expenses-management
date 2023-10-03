import { Link } from 'react-router-dom';

function ProductsPage() {
  return (
    <div>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/product-1'>A Book</Link></li>
        <li><Link to='/products/product-2'>A Carpet</Link></li>
        <li><Link to='/products/product-3'>An Online Course</Link></li>
      </ul>
    </div>
  );
}

export default ProductsPage;