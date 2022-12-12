import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../features/cartSlice";
import { filterProducts } from "../features/productsSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import Search from "./Search";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFilter, setIsFilter] = useState(false);
  const products = useSelector((state) => state.products);
  console.log(products);
  const handleAddToCar = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  const inputHandler = (e) => {
    if (e.target.value) {
      setIsFilter(true);
      dispatch(filterProducts(e.target.value));
    } else {
      setIsFilter(false);
    }
  };
  //   useEffect(() => {}, [data, dispatch]);

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>Мобильные Телефоны</h2>

          <div className="main">
            <h1>React Search</h1>
            <div className="search">
              <input type="text" onChange={inputHandler} />
            </div>
          </div>
          <div className="products">
            {isFilter ? (
              <>
                {products.filterItems?.map((product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCar(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <>
                {data?.map((product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCar(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
              </>
            )}
            {/* {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCar(product)}>
                  Add To Cart
                </button>
              </div>
            ))} */}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
