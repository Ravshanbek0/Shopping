import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'

function Products({ setDatas, datas, datas1 }) {
    function removeFun(category) {
        if (category != "all") {
            const obj = datas1.filter((item) => {
                return item.category == category
                console.log(item);
            })
            setDatas(obj)
        } else {
            setDatas(datas1)
        }

    }
    return (
        <div className='cards'>
            <div className="container">
                <h1 className="lastest">Latest Products</h1>
                <hr className='hr-teg' />
                <div className="categries">
                    <button className="category-btn" onClick={() => {
                        removeFun("all")
                    }}>All</button>
                    <button className="category-btn" onClick={() => {
                        removeFun("men's clothing")
                    }}>Men's clothing</button>
                    <button className="category-btn" onClick={() => {
                        removeFun("women's clothing")
                    }}>Women's clothing</button>
                    <button className="category-btn" onClick={() => {
                        removeFun("jewelery")
                    }}>Jewerly</button>
                    <button className="category-btn" onClick={() => {
                        removeFun("electronics")
                    }}>Electronic</button>
                </div>
                <div className="card-box">
                    {datas?.map((item) => {
                        return <div className="card">
                            <NavLink to={`/productId/${item.id}`}><img className="card-img-top" src={item.image} alt="Card image cap" /></NavLink>
                            <div className="card-body">
                                <h5 className="card-title">{item.price} $</h5>
                                <p className="card-text">{item.title?.slice(0,70)}...</p>
                                <NavLink to={`/productId/${item.id}`}><a href="#" class="card-btn">Buy now</a></NavLink>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products