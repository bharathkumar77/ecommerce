import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';

const Product = ({ details }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartProducts);
    const navigate = useNavigate();


    const openProduct = (details) => {
        navigate(`/product/${details.details.id}`);

    }
    return (
        <Card sx={{ width: "25%", margin: "20px", boxShadow: "10px black" }}  >
            <CardActionArea onClick={() => openProduct({ details })}>
                <CardMedia
                    component="img"
                    height="250"
                    image={details.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {details.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button key={details.id} onClick={() => openProduct({ details })} id="addToCart" size="small" color="primary">
                    Open For Details
                </Button>
            </CardActions>
        </Card >
    )
}

export default Product