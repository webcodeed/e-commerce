import { FaHeart } from "react-icons/fa"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import useLike from "./useLike"

function ItemList({ Items }) {
    // LIKE ITEM
    const { likeItem, unlikeItem, isLiked } = useLike()

    const toggleLike = (item) => {
        console.log("called");
        
        if (isLiked(item)) {
            unlikeItem(item)
        } else {
            likeItem(item)
        }
    }

    const navigate = useNavigate()
    return (
        <div className="item_list">
            {Items.products.map((item) => (
                <div
                    className="item"
                    key={item.id}
                    // onClick={() => navigate(`/items/${item.id}`)}
                >
                    <div className="item_image_div">
                        <img
                            loading="lazy"
                            src={item.images[0]}
                            alt={item.title}
                            className="item_image"
                        />
                    </div>
                    <h2 className="item_title">{item.title}</h2>
                    <p className="item_price">${item.price}</p>
                    <button
                        className={
                            isLiked(item) ? "item_button_liked" : "item_button"
                        }
                        onClick={() => toggleLike(item)}
                    >
                        <FaHeart />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ItemList
