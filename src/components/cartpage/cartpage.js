import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./cartpage.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button } from '@mui/material';
import { deleteFromCart } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
    const cartItems = useSelector(state => state.cartProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let totalPrice = 0;
    cartItems.forEach((each) => {
        totalPrice += Math.floor(each.price);

    })

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id))
    }

    const browseProducts = () => {
        navigate("/products")
    }
    return (
        <div className="cartPage">
            {cartItems.map((each, index) => {
                return (

                    <div className="cartItem" key={index}>
                        <img style={{ height: "75px", width: "75px" }} src={each.image} />
                        <h3 >{each.title}</h3>
                        <h3 id="price">Price: {Math.floor(each.price)}$ </h3>
                        <h3><DeleteForeverIcon onClick={() => handleDelete(each.id)} /></h3>
                    </div>

                )
            })}
            {cartItems.length > 0 ?
                <div style={{ textAlign: "center", color: "green" }}>
                    <h1 style={{ textAlign: "center", color: "green" }}>TOTAL PRICE : {totalPrice}$</h1>
                    <Button variant="contained" color="primary" onClick={browseProducts} sx={{ color: "white" }}> Proceed To Pay   <PaymentIcon /></Button>
                </div>
                :
                <div style={{ textAlign: "center", color: "green" }}>
                    <h1 >No Items in cart</h1>
                    <Button onClick={browseProducts} > Browse Products </Button>

                </div>
            }
        </div>
    )
}

export default Cartpage