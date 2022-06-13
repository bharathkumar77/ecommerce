import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Product from "../Product/product"
import { FormControl, InputLabel, Box } from '@mui/material';
import { CircularProgress, Select, MenuItem } from '@mui/material';
import { fetchProducts } from '../actions/productActions';
import { filterProducts } from '../actions/filterActions';

const Products = () => {

    const products = useSelector(state => state.products, shallowEqual)
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

    const handleFilter = (event) => {
        setCategory(event.target.value)
        console.log(category);

        let filtered = products.filter((each) => each.category === category);


    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => dispatch(fetchProducts(res)))

    }, [])
    return (
        <>

            {products.length === 0 ?

                <CircularProgress sx={{ color: "black", position: "absolute", top: "50%", left: "50%" }} />
                :
                <div className="products">
                    <FormControl sx={{ width: "15%", marginTop: "25px", marginLeft: "175px" }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(event) => handleFilter(event)}
                        >
                            {categories.map((category, index) => (
                                <MenuItem
                                    key={index}
                                    value={category}
                                >
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ display: "flex", flexWrap: "wrap", marginLeft: "160px" }} >
                        {products.filter((each) => {
                            if (category) {
                                return each.category === category
                            }
                            else {
                                return each;
                            }
                        }).map((each, index) => {
                            return (
                                <Product key={index} details={each} />
                            )
                        })
                        }
                    </Box>
                </div>
            }
        </>
    )
}

export default Products;