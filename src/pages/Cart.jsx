import React, { useState } from 'react'
import { TiTrash } from "react-icons/ti";
import '../App.css'

function Cart({ navData, setNavData }) {
    const [navId, setNavid] = useState()
    const [cartBtn, setCartBtn] = useState(1)
    function navMinus(id) {
        const datan = navData.filter((item) => {
            return item.id != id
        })
        console.log(datan);
        setNavData(datan)
    }
    return (
        <>
            {
                navData.length > 0 ? navData?.map((item) => {
                    return <div className='cart'>
                        <div className="container">
                            <div className="cart-box">
                                <img src={item.image} alt="" className="cart-img" />
                                <div className="cart-info">
                                    <h1 className="cart-title">{item.title?.slice(0,50)}...</h1>
                                    <p className="cart-price">{item.price}$</p>
                                    <p className="cart-description">{item.description?.slice(0, 300)}...</p>
                                    <div className="cart-btns">
    
                                        <TiTrash className='cart-btn' onClick={() => {
                                            navMinus(item.id)
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <hr className='hr-teg hr3' />
    
                        </div>
                    </div>
                }) : <p className="cart-none">Hech qanday ma'lumot yo'q.</p>
            }
        </>
    )
}

export default Cart