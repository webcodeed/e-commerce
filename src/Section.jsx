import useFetch from "./useFetch"
import ItemList from "./ItemList"
import SkeletonScreen from "./SkeletonScreen"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

function Section() {
    const limit = 12
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get("page")) || 1
    const skip = (page - 1) * limit
    const { items, isLoading, error } = useFetch({
        url: `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,images`,
        render: skip,
    })

    // function handleLimit(num, numb) {
    //     setSkip((prev) => prev + num)
    //     const nextPage = page + numb;
    //     console.log(page);
    //     setSearchParams({page: nextPage})

    // }
    function next() {
        const nextpage = page + 1
        if (page * limit < items.total) {
            setSearchParams({ page: nextpage })
        }
    }
    function prev() {
        const prevpage = page - 1
        if (page > 0) {
            setSearchParams({ page: prevpage })
        }
    }

    return (
        <section className="section">
            {isLoading && <SkeletonScreen count={12} />}
            {error && <h1 className="message">{error}</h1>}
            {items && <ItemList Items={items} />}
            <div className="pagination">
                    <button 
                        onClick={prev}
                        className="skip"
                        disabled={isLoading || skip === 0}
                    >
                        Previous
                    </button>
                <span style={{ margin: "0 10px" }}>
                    Page {page} of {Math.ceil(items?.total / limit)}
                </span>
                    <button
                        onClick={next}
                        className="skip"
                        disabled={
                            isLoading || !items || skip + limit >= items.total
                        }
                    >
                        Next
                    </button>
            </div>
        </section>
    )
}

export default Section
