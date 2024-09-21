import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/operations/productAPI';
import { STATE_CHOICES } from '../data/dummyData';
import { buy } from '../services/operations/paymentAPI'; // Adjust the import based on your file structure
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import CartProductRender from '../components/Cart/CartProductRender';
import { openCart, resetCart } from '../slices/cartSlice';

export default function Checkout() {
    const location = useLocation();
    const { productId, byCart  } = location.state || {};
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [allId, setAllId] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [product,setProduct ] = useState({});
    const [formData, setFormData] = useState({
        country: "India",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        pinCode: "",
        phoneNumber: "",
    });


    useEffect(() => {
        console.log("By cart ", byCart)
        let newTotalPrice = 0;
        
        if (byCart) {
            const ids = cart.map((data) => {
                newTotalPrice += data.price;
                return data._id;
            });
            setAllId(ids);
            setTotalPrice(newTotalPrice);
        } else {
            const fetchProduct = async () => {
                try {
                    const response = await fetchProductById(productId);
                    if (response) {
                        setProduct(response);  
                        setAllId([response._id]);
                        setTotalPrice(response.price);  
                    }
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            };
            fetchProduct();
        }
        setTotalPrice(newTotalPrice);
    }, [byCart, cart, productId]);
    
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const {token} = useSelector((state) => state.auth)
    console.log("Token from checkout ", token)

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();


        if(!token) {
            toast.error("You havn't login yet")
            navigate("/auth")
        }
        // dispatch(openCart(false))
        await buy(token, allId, totalPrice,formData,  navigate,); 
    };

    
    return (
        <div className="container flex md:flex-row flex-col w-full md:justify-evenly items-center justify-center mx-auto md:mt-[12%] mt-[120px] p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <label htmlFor="country" className="block">
                    Country/Region
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select option</option>
                        <option value="India">India</option>
                    </select>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label htmlFor="firstName" className="block">
                        <input
                            placeholder="First Name (optional)"
                            value={formData.firstName}
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <label htmlFor="lastName" className="block">
                        <input
                            placeholder="Last Name"
                            value={formData.lastName}
                            name="lastName"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </label>
                </div>

                <label htmlFor="address" className="block">
                    <input
                        placeholder="Address"
                        value={formData.address}
                        name="address"
                        type="text"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </label>
                <label htmlFor="apartment" className="block">
                    <input
                        placeholder="Apartment"
                        value={formData.apartment}
                        name="apartment"
                        type="text"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label htmlFor="city" className="block">
                        <input
                            placeholder="City"
                            value={formData.city}
                            name="city"
                            type="text"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </label>

                    <label htmlFor="state" className="block">
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select State</option>
                            {STATE_CHOICES.map((data) => (
                                <option key={data[0]} value={data[0]}>
                                    {data[1]}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label htmlFor="pinCode" className="block">
                        <input
                            placeholder="Pin Code"
                            value={formData.pinCode}
                            name="pinCode"
                            type="number"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </label>
                </div>

                <label htmlFor="phoneNumber" className="block">
                    <input
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        type="tel"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </label>

                <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
                    Proceed to Payment
                </button>
            </form>

            <div>
  {
    byCart ? (
      <CartProductRender cart={cart} />
    ) : (
      <div>
        {product && product.images && product.images.length > 0 ? (
          <article className='flex flex-row py-5 gap-3 justify-between w-full items-center' key={product._id}>
            <div className='w-[150px] h-[150px]'>
              <img 
                className='h-full w-full object-contain' 
                src={product.images[0]?.url} 
                alt={product.name || "Product"} 
              />
            </div>
            <div className='w-[60%] flex gap-2 flex-col justify-center items-start'>
              <p className='text-[13px] text-gray-500'>RAJWADA FURNISH</p>
              <h3 className='font-bold text-[18px]'>{product.name}</h3>
              <p className='font-bold text-gray-500'>₹ {product.price}</p>
              <p className='text-[13px] text-gray-500'>{product.selectedSize || 'Size not selected'} / {product.selectedWood || 'Wood finish not selected'}</p>
            </div>
          </article>
        ) : (
          <p>Loading product details...</p> // Optional: Display a loading message until product is fetched
        )}
      </div>
    )
  }
</div>

        </div>
    );
}
