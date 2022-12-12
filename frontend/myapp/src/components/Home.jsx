import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";



const Home = () => {


    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const history = useHistory()
    const handleAddToCar = (product) => {
        dispatch(addToCart(product))
        history.push("/cart")

    }
    return <div className="home-container">
        {isLoading ? (<p>Loading...</p>) : error ? (
            <p>An error occured..</p>) : (<>
                <h2>Мобильные Телефоны</h2>
                

                <div className="products">
                    {data?.map(product => <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCar(product)}>Add To Cart</button>


                    </div>)}

                </div>
            </>)}
    </div>
    
}



export default Home;