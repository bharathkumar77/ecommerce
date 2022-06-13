import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Box, Rating, Button } from '@mui/material/';
import LinearProgress from '@mui/material/LinearProgress';
import { addToCart } from '../actions/cartActions';
import "./productdetails.css"

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cart, setCart] = useState(false);

    const handleCart = () => {
        console.log(product);
        setCart(true);
        dispatch(addToCart(product));
    }

    const handleBack = () => {
        navigate("/products");
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json()).then((res) => {
                setProduct(res)
            })
    }, [])

    return (
        <>
            {product === null ?
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                :
                <div className="productPage" >
                    <div className="image">
                        <img className="productImage" src={product.image}></img>
                    </div>
                    <div className="productDetails">
                        <h2>{product.title}</h2>
                        <p >{product.description}</p>
                        <Rating name="read-only" value={product.rating.rate} readOnly ></Rating>
                        <p>{`Total Reviews : ${product.rating.count}`}</p>
                        <label htmlFor="price">Price : </label>
                        <h2 style={{ color: "green" }} id="price">{`${product.price}$`}</h2>
                        <h2> Category: {product.category}</h2>
                        {!cart ?
                            <Button variant="contained" color="success" onClick={() => handleCart()}> Add To Cart </Button>
                            :
                            <>
                                <Button variant="contained" disabled color="success"> Added !! </Button>
                                <br />
                                <br />
                                <Button onClick={handleBack} variant="outlined" color="secondary">Back</Button>
                            </>
                        }
                    </div>
                </div>

            }
        </>
    )
}

export default ProductDetails