import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

function ItemDetails() {
    const { id } = useParams()
    const { items, isLoading, error } = useFetch({
        url: `https://dummyjson.com/products/${id}`,
        render: id,
    })
    return (
        <div className="ItemDetails">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1 className="message">{error}</h1>}
            {items && (
                <article className="item_detail" key={items.id}>
                    <img
                        src={items?.images[0]}
                        alt={items?.title}
                        className="item_detail_image"
                    />
                    <div className="item_detail_details">
                        <h2>{items.title}</h2>
                        <p>{items.description}</p>
                        <h3>
                            {items.price}
                            <span>{items.discountPercentage}</span>
                        </h3>
                        <button
                            className="item_detail_button"
                            type="button"
                        ></button>
                    </div>
                    <div className="item_detail_reviews">
                        {items.reviews.map((item) => (
                            <div
                                className="item_detail_reviewer"
                                key={crypto.randomUUID()}
                            >
                                <p>{item.comment}</p>
                                <p>{item.date}</p>
                                <h3>{item.reviewerName}</h3>
                                <h4>{item.reviewerEmail}</h4>
                            </div>
                        ))}
                    </div>
                </article>
            )}
        </div>
    )
}

export default ItemDetails
