import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchAllOrders } from '../../services/operations/orderAPI';
import { logout } from '../../services/operations/authAPI';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token, profileData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadOrders = async () => {
            const fetchedOrders = await fetchAllOrders(token);
            if (fetchedOrders) {
                setOrders(fetchedOrders);
            } else {
                toast.error("Failed to load orders");
            }
            setLoading(false);
        };

        if (token) {
            loadOrders();
        }
    }, [token]);

    const navigate = useNavigate()
    const handleLogout = () => {
        // Dispatch logout action here
        dispatch(logout(navigate));
        toast.success("Logged out successfully");
    };

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Order History</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>

            {orders.length === 0 ? (
                <p className="text-gray-500 text-center">No orders found.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map(order => (
                        <div
                            key={order._id}
                            className="bg-white shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                        >
                            {/* Left side - Image */}
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <img
                                    src={order.products[0].product.images[0].url}
                                    alt={order.products[0].product.name}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Right side - Order Details */}
                            <div className="md:w-2/3 md:pl-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    Order ID: 
                                    <span className="text-blue-600 ml-2">{order._id}</span>
                                </h3>
                                <p className="mb-2 text-sm md:text-base">
                                    <span className="font-semibold">Status:</span> {order.status}
                                </p>
                                <p className="mb-2 text-sm md:text-base">
                                    <span className="font-semibold">Total Amount:</span> ₹{order.totalAmount}
                                </p>

                                <h4 className="font-semibold mb-2 text-sm md:text-base">Products:</h4>
                                <ul className="mb-4 space-y-2">
                                    {order.products.map(item => (
                                        <li key={item._id} className="flex items-center space-x-2 md:space-x-4">
                                            <Link
                                                to={`/product/${item.product.name}/${item.product._id}`}
                                                className="flex items-center hover:underline"
                                            >
                                                <img
                                                    src={item.product.images[0].url}
                                                    alt={item.product.name}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover"
                                                />
                                                <span className="ml-2 md:ml-4 text-sm md:text-base">
                                                    {item.product.name} (Quantity: {item.quantity})
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="font-semibold mb-2 text-sm md:text-base">Address:</h4>
                                <p className="text-sm md:text-base">
                                    {order.addresses[0]?.type || 'N/A'}
                                </p>
                                <p className="text-sm md:text-base">Payment Status: {order.paymentStatus}</p>
                                <p className="text-sm text-gray-500">
                                    Order At: {new Date(order.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;
