import { useState } from "react"
import useFetch from "./useFetch"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [sort, setSort] = useState("sortby")
    const [category, setCategory] = useState("Categories")
    const navigate = useNavigate()
    const url = "https://dummyjson.com/products"

    // category useFetch
    const {
        items: categoryItem,
        isLoading: categoryLoading,
        error: categoryError,
    } = useFetch({
        url: `${url}/categories`,
        render: true,
    })

    // category function
    function goToCategory(slug) {
        navigate(`/category/${slug}`)
        setCategory("Categories")
    }

    return (
        <header className="header">
            <div className="header_img">
                <img
                    className="header_banner"
                    src="/img1.png"
                    alt="An advert image"
                />
            </div>
            <div className="header_nav">
                <select
                    onChange={(e) => {
                        const selected = e.target.value
                        if (selected === "see_all") {
                            navigate("/")
                        } else {
                            goToCategory(selected)
                        }
                    }}
                    name="category"
                    id="header_category_dropdown"
                    value={category}
                >
                    <option value="Categories" disabled>
                        {categoryLoading
                            ? "Loading categories..."
                            : categoryError
                            ? "Failed to load categories"
                            : "Select Category"}
                    </option>
                    {categoryItem && (
                        <option value="see_all">All Products</option>
                    )}
                    {categoryItem?.map((item) => (
                        <option value={item.slug} key={item.slug}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <select
                    name="sort"
                    id="sort_dropdown"
                    value={sort}
                    onChange={(e) => {
                        const value = e.target.value
                        switch (value) {
                            case "title_asc":
                                setSort(value)
                                navigate(`/items/title/asc`)
                                break
                            case "title_desc":
                                setSort("sortby")
                                navigate(`/items/title/asc`)
                                break
                            case "price_asc":
                                setSort("sortby")
                                navigate(`/items/price/asc`)
                                break
                            case "price_desc":
                                setSort("sortby")
                                navigate(`/items/price/asc`)
                                break
                            case "rating":
                                setSort("sortby")
                                navigate(`/items/rating/asc`)
                                break
                            case "tags":
                                setSort("sortby")
                                navigate(`/items/tags[0]/asc`)
                                break

                            default:
                                break
                        }
                    }}
                >
                    <option disabled value="sortby">
                        Sort by
                    </option>
                    <option value="title_asc">Price: Low to High</option>
                    <option value="title_desc">Price: High to Low</option>
                    <option value="price_asc">Name: A-Z</option>
                    <option value="price_desc">Name: Z-A</option>
                    <option value="rating">Rating</option>
                    <option value="tags">Tags</option>
                </select>
            </div>
        </header>
    )
}

export default Header
