import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/products');
  }

  return(
    <>
      <h1>My home page</h1>
      <Link to="/products">Products</Link>
      <button onClick={handleClick}>To Products</button>
    </>
  );
}

export default HomePage;