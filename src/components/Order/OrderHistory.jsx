import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchAllOrders } from '../../services/operations/orderAPI';
import { logout } from '../../services/operations/authAPI';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadOrders = async () => {
            const fetchedOrders = await fetchAllOrders(token);
            if (fetchedOrders) {
                setOrders(fetchedOrders.reverse());
            } else {
                toast.error("Failed to load orders");
            }
            setLoading(false);
        };

        if (token) {
            loadOrders();
        }
    }, [token]);

    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout(navigate));
        toast.success("Logged out successfully");
    };

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Order History</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>

            {orders.length === 0 ? (
                <p className="text-gray-500 text-center">No orders found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {orders.map(order => (
                        <div
                            key={order._id}
                            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition duration-300"
                        >
                            {/* Image */}
                            <div className="mb-4">
                                <img
                                    src={order.products[0].product.images[0].url}
                                    alt={order.products[0].product.name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </div>

                            {/* Order Details */}
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Order ID: 
                                <span className="text-blue-600 ml-2">{order._id}</span>
                            </h3>
                            <p className="text-gray-600 mb-2">
                                <span className="font-semibold">Status:</span> {order.status}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Total Amount:</span> ₹{order.totalAmount}
                            </p>

                            <h4 className="font-semibold text-gray-700 mb-2">Products:</h4>
                            <ul className="mb-4">
                                {order.products.map(item => (
                                    <li key={item.product._id} className="flex items-center mb-2">
                                        <Link
                                            to={`/product/${item.product.name}/${item.product._id}`}
                                            className="flex items-center hover:text-blue-500"
                                        >
                                            <img
                                                src={item.product.images[0].url}
                                                alt={item.product.name}
                                                className="w-12 h-12 rounded-md object-cover mr-3"
                                            />
                                            <span>
                                                {item.product.name} (Quantity: {item.quantity})
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="font-semibold text-gray-700 mb-2">Address:</h4>
                            {order.addresses[0] ? (
                                <p className="text-gray-600 mb-2">
                                    {order.addresses[0].type || 'N/A'}: {order.addresses[0].address}, {order.addresses[0].city}, {order.addresses[0].state}, {order.addresses[0].country} - {order.addresses[0].pinCode}
                                </p>
                            ) : (
                                <p className="text-gray-600 mb-2">No address provided</p>
                            )}

                            <p className="text-gray-600 mb-2">
                                <span className="font-semibold">Customer:</span> {order.firstName} {order.lastName}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <span className="font-semibold">Phone Number:</span> {order.phoneNumber || 'N/A'}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Payment Status:</span> {order.paymentStatus}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Order At: {new Date(order.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistory;
