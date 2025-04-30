import { useEffect, useState } from "react"
import { FaShoppingCart, FaHeart, FaSearch, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router"
import useFetch from "./useFetch"

function Navbar() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    const [debounce, setDebounce] = useState("")
    const url = "https://dummyjson.com/products"

    // search useFetch
    const {
        items: searchItem,
        isLoading: searchLoading,
        error: searchError,
    } = useFetch({ url: `${url}/search?q=${debounce}`, render: debounce })

    // search function
    function handleSearch(product) {
        navigate(`/items/${product.id}`)
        setDebounce("")
        setQuery("")
    }

    // search useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(query)
        }, 500)

        return () => clearTimeout(timer)
    }, [query])

    return (
        <nav className="navbar">
            <h1>
                <span className="navbar_heading">E</span>-shop
            </h1>
            <div className="navbar_links">
                <Link to="/">Home</Link>
                <Link to="/login">Products</Link>
                <Link to="/About">About Us</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <div className="navbar_items">
                    <form className="navbar_form" action="#">
                        <input
                            type="search"
                            name="searchQuery"
                            value={query}
                            id="navbar_search_id"
                            list="products-list"
                            className="navbar_search_input"
                            placeholder={
                                searchLoading
                                  ? "Loading..."
                                  : searchError
                                  ? `Error: ${searchError}`
                                  : "Search products..."
                              }
                            
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {debounce.length >= 1 && (
                            <ul className="navbar_search_list">
                                {searchItem.products.map((product) => (
                                    <li
                                        className="navbar_search_item"
                                        key={product.id}
                                        onClick={() => handleSearch(product)}
                                    >
                                        {product.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <FaSearch className="navbar_search_icon" />
                    </form>
                    {/* <FaSearch /> */}
                    <FaUser onClick={() => {navigate("/login")}} />
                    <FaHeart />
                    <FaShoppingCart onClick={() => {navigate("/cart")}} />
            </div>
        </nav>
    )
}

export default Navbar
