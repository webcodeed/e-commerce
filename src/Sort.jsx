import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import useFetch from './useFetch';

function Sort() {
  //  pagination
  const limit = 12
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const skip = (page - 1) * limit
  
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
  const { sortBy, order } = useParams();
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
  
  const {items, isLoading, error} = useFetch({url: url,
    render: url
   })
  
  return ( 
        <div className="sort_div">  
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
                        </button>
                    </div>
                ))}
            </div>
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
            </div>
   );
}

export default Sort;