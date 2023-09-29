import { Link } from 'react-router-dom';

function HomePage() {
  return(
    <>
      <h1>My home page</h1>
      <Link to="/products">Products</Link>
    </>
  );
}

export default HomePage;