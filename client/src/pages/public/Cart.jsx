import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, decrementQty, incrementQty } from "../../redux/slices/cart.slice";

const Cart = () => {
    const { bag } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subtotal = bag.reduce((sum, item) => sum + item.qty * +item.price, 0);
    const gst = +(subtotal * 0.18).toFixed(2);
    const total = +(subtotal + gst).toFixed(2);

    if (bag.length === 0)
        return (
            <div className="container text-center my-5">
                <h3>Your cart is empty 🛒</h3>
                <button onClick={() => navigate("/")} className="btn btn-primary mt-3">
                    Continue Shopping
                </button>
            </div>
        );

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">Shopping Cart</h2>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {bag.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>
                                <button onClick={() => dispatch(decrementQty(item.id))}>−</button>
                                <span className="mx-2">{item.qty}</span>
                                <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
                            </td>
                            <td>₹{item.qty * +item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end mb-3">
                <p>Subtotal: ₹{subtotal}</p>
                <p>GST: ₹{gst}</p>
                <h5>Total: ₹{total}</h5>
            </div>
            <div className="d-flex justify-content-end gap-2">
                <button onClick={() => navigate("/checkout")} className="btn btn-success">
                    Checkout
                </button>
                <button onClick={() => dispatch(clearCart())} className="btn btn-danger">
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
