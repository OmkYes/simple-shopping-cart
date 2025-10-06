import React from "react";
import { useGetProductsQuery } from "../../redux/apis/public.api";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cart.slice";

const Home = () => {
    const dispatch = useDispatch();
    const { data = [], isLoading } = useGetProductsQuery();
    if (isLoading) return <div className="text-center mt-5">Loading...</div>;
    const URL = import.meta.env.VITE_BACKEND_URL
    return (
        <div className="container my-4">
            <h2 className="mb-4 text-center">Products</h2>
            <div className="row g-4">
                {data.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={`${URL}${product.imageUrl}`}
                                className="card-img-top"
                                alt={product.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />

                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">₹{product.price}</p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
