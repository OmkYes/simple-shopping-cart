import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../../redux/apis/public.api";
import { clearCart } from "../../redux/slices/cart.slice";

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { bag } = useSelector((state) => state.cart);

    const [placeOrder, { isSuccess, isLoading }] = usePlaceOrderMutation();

    const subtotal = bag.reduce((sum, item) => sum + item.qty * +item.price, 0);
    const gst = +(subtotal * 0.18).toFixed(2);
    const total = +(subtotal + gst).toFixed(2);

    const formik = useFormik({
        initialValues: { name: "", phone: "", address: "", city: "" },
        validationSchema: yup.object({
            name: yup.string().required("Name is required"),
            phone: yup.string().required("Phone is required"),
            address: yup.string().required("Address is required"),
            city: yup.string().required("City is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (bag.length === 0) {
                toast.warn("Your cart is empty!");
                return;
            }

            placeOrder({
                customer: values,
                products: bag.map((item) => ({
                    productId: item.id, 
                    quantity: item.qty,
                })),
            });

            resetForm();
        },
    });

    useEffect(() => {
        if (isSuccess) {
            toast.success("Order placed successfully!");
            dispatch(clearCart());
            navigate("/success");
        }
    }, [isSuccess, navigate, dispatch]);


    if (bag.length === 0) {
        return (
            <div className="container text-center my-5">
                <h3>Your cart is empty 🛒</h3>
                <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="container my-5">
                <h2 className="text-center mb-4">Checkout</h2>
                <div className="row g-4">
                    {/* Delivery Info */}
                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 p-4">
                            <h5 className="mb-3">Delivery Information</h5>
                            <form onSubmit={formik.handleSubmit}>
                                {["name", "phone", "address", "city"].map((field) => (
                                    <div className="mb-3" key={field}>
                                        <label className="form-label text-capitalize">{field}</label>
                                        {field === "address" ? (
                                            <textarea
                                                {...formik.getFieldProps(field)}
                                                className="form-control"
                                                rows="2"
                                                placeholder={`Enter your ${field}`}
                                            />
                                        ) : (
                                            <input
                                                {...formik.getFieldProps(field)}
                                                type="text"
                                                className="form-control"
                                                placeholder={`Enter your ${field}`}
                                            />
                                        )}
                                        {formik.touched[field] && formik.errors[field] && (
                                            <small className="text-danger">{formik.errors[field]}</small>
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    className="btn btn-success w-100 mt-3"
                                    disabled={bag.length === 0}
                                >
                                    {bag.length === 0 ? "Cart is Empty" : "Place Order"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 p-4">
                            <h5 className="mb-3">Order Summary</h5>
                            {bag.map((item) => (
                                <div
                                    key={item.id}
                                    className="d-flex justify-content-between align-items-center mb-2"
                                >
                                    <div>
                                        <strong>{item.name}</strong>
                                        <div className="text-muted small">₹{item.price}</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-sm btn-outline-secondary me-2"
                                            onClick={() => dispatch(decrementQty(item.id))}
                                        >
                                            −
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            className="btn btn-sm btn-outline-secondary ms-2"
                                            onClick={() => dispatch(incrementQty(item.id))}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <strong>₹{item.qty * +item.price}</strong>
                                </div>
                            ))}

                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <strong>₹{subtotal}</strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>GST (18%)</span>
                                <strong>₹{gst}</strong>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between fs-5">
                                <span>Total</span>
                                <strong>₹{total}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
