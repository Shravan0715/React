import { Link } from "react-router-dom";


const products = [
  { id: 1, name: "Laptop", price: 74900, image: "https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg" },
  { id: 2, name: "Smartphone", price: 37500, image: "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" },
  { id: 3, name: "Headphones", price: 7500, image: "https://cdn.pixabay.com/photo/2017/08/29/18/43/music-2694489_1280.jpg" }
];

function ProductList({ cart, setCart, isLoggedIn, setIsLoggedIn }) {
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
 

  return (
    <div className="container mt-5">
      {!isLoggedIn ? (
        <div className="text-center">
          <h2>Please login first to view products</h2>
          <Link to="/" className="btn btn-primary mt-3">
            Go to Login
          </Link>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>🛍️ Product Catalogue</h1>
            <Link to="/" className="btn btn-danger" onClick={() => setIsLoggedIn(false)}>Logout</Link>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price}</p>
                    <div className="d-flex justify-content-between">
                      <button onClick={() => addToCart(product)} className="btn btn-primary">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/cart" className="btn btn-warning mt-3">View Cart ({cart.length})</Link>
        </>
      )}
    </div>
  );
}

export default ProductList;