import { FaArrowLeft, FaArrowRight, FaMinus, FaPlus, FaTimes } from "react-icons/fa"
import useFetch from "./useFetch"
import { useState } from "react"

function Carts() {
    const [delivery, setDelivery] = useState("")
    const { items, isLoading, error } = useFetch({
        url: "https://dummyjson.com/carts/5",
        render: true,
    })
    return (
        <div className="cart_list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1 className="message">{error}</h1>}
            <ul className="cart_list_details">
              <div className="cart_list_title">
                <h2>Shopping Cart</h2> <h3 className="fadedOut" >{items?.totalQuantity} items</h3>

              </div>
                {items?.products.map((item) => (
                    <li className="cart_item" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                        <span className="item_quantity">
                            <FaMinus />
                            <h3>{item.quantity}</h3>
                            <FaPlus />
                        </span>
                        <h3>${item.price}</h3>
                        <FaTimes className="fadedOut" />
                    </li>
                ))}
            </ul>
            <form className="cart_list_form">
                <h2>Summary</h2>
                <span className="cart_list_price">
                    <h4>Items : {items?.totalQuantity}</h4>
                    <h4>${items?.total}</h4>
                </span>
                <span className="cart_list_dropdown">
                    <label htmlFor="cart_dropdown">SHIPPING</label>
                    <select
                        name="delivery_type"
                        id="cart_dropdown"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                    >
                        <option value="" disabled>
                            select delivery type
                        </option>
                        <option value="100">IntraState- $100</option>
                        <option value="200">InterState- $200</option>
                        <option value="500">InterCountry- $500</option>
                    </select>
                </span>
                <span className="cart_list_input">
                  <label htmlFor="coupon_code">Coupon Code</label>
                  <input type="text" name="coupon" id="coupon_code" placeholder="Enter Code For Discount" />
                </span>
              <div className="cart_list_total">
                <h3>Total Price</h3>
                <h3>${items?.total + Number(delivery)}</h3>
              </div>
              <button type="submit">CHECKOUT</button>
            </form>
            {/* <h3 className="fadedOut"> <FaArrowLeft/> Back to shop</h3> */}
        </div>
    )
}

export default Carts
