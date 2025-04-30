import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { FaHeart } from "react-icons/fa"

function Categories() {
    const { slug } = useParams()
    const { items, isLoading, error } = useFetch({
        
       url: `https://dummyjson.com/products/category/${slug}`,
       render: slug
    }
    )

    return (
        <div className="item_list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1 className="message">{error}</h1>}
            {items?.products.map((item) => (
                <div
                    className="item"
                    key={item.id}
                    onClick={() => navigate(`/items/${item.id}`)}
                >
                    <div className="item_image_div">
                        <img
                            src={item.images[0]}
                            alt={item.title}
                            className="item_image"
                        />
                    </div>
                    <h2 className="item_title">{item.title}</h2>
                    <p className="item_price">${item.price}</p>
                    <button className="item_button">
                       <FaHeart/>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Categories
