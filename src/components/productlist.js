import { useState } from "react";
import "./productStyle.css";
import { useApi } from "../hooks/useApi";
import { Link } from "react-router-dom";

function ProductList() {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/products");
  const { data: products, loading } = useApi(url);

  // useEffect(() => {
  //   // fetch("http://localhost:3000/products")
  //   // .then(res => res.json())
  //   // .then(data => setProducts(data))
  //   const getProducts = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   getProducts();
  // }, [url]);

  return (
    <div className="product-list">
      <div className="filters">
        <button
          onClick={() => {
            setUrl("http://localhost:3000/products");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/products?category=mobile");
          }}
        >
          Mobile
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/products?category=tv");
          }}
        >
          TV
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/products?category=washing-machine");
          }}
        >
          Washing Machine
        </button>
      </div>
      {/* {loading && <div>Loading...</div>} */}
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : (
          products &&
          products.map((product) => (
            <li>
              <h3>{product.name}</h3>
              <p>{product.description.slice(0, 20) + "..."}</p>
              <strong>{product.price}</strong>
              <p>
                <Link to={`/products/${product.id}`}>Read More</Link>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default ProductList;
