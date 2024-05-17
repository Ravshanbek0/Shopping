import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import './Page.css'

function ProductId({setNavData,navData}) {
    const [qoshil,setQoshil]=useState(true)
    const { id } = useParams()
    const [iddata, setIddata] = useState([])
    async function getIdData(link) {
        const req = await fetch(link)
        const dataa = await req.json()
        setIddata(dataa)
    }
    useEffect(() => {

        getIdData(`https://fakestoreapi.com/products/${id}`)
    }, [])
    return (
        <div className="container">
            <div className={qoshil ? "qoshil" : "qoshil active"}>Qoshildi <FaCalendarCheck/></div>
            <div className='productID'>
                <img src={iddata.image} alt="" className="product-img-id" />
                <div className="id-box">
                    <p className="id-category">{iddata.category}</p>
                    <p className="id-title">{iddata.title?.slice(0,45)}...</p>
                    <p className="id-rate">Rating {iddata.rating && iddata.rating.rate} <FaStar/></p>
                    <p className="id-price">{iddata.price}$</p>
                    <p className="id-description">{iddata.description?.slice(0,110)}...</p>
                    <div className="id-btns">
                        <button className="id-btn" onClick={()=>{
                            setNavData([...navData,iddata])
                            setQoshil(false)
                        }}>Add to Cart</button>
                        <NavLink to='/cart' ><button className="id-btn2">Go to Cart</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductId