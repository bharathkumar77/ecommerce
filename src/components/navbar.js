import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from './actions/loginActions';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function ButtonAppBar() {
    const dispatch = useDispatch();
    const cartNumber = useSelector(state => state.cartNumber);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const handleLogout = () => {
        dispatch(logout())
    }
    const navigate = useNavigate();
    const handleCartPage = (event) => {
        event.preventDefault();
        navigate("/cart")

    }
    const handleTitle = () => {
        navigate("/")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "black" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography onClick={handleTitle} variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: "flex-start", cursor: "pointer" }}>
                        ECommerce Site
                    </Typography>
                    {!isLoggedIn ?
                        <Link href="/login" underline="none" sx={{ color: "white" }}>
                            LOGIN
                        </Link>
                        :
                        <>
                            <Link onClick={handleLogout} href="/" underline="none" sx={{ color: "white" }}>
                                LOGOUT
                            </Link>
                            <Button sx={{ color: "white" }} onClick={handleCartPage}>
                                <ShoppingCartIcon sx={{ paddingLeft: "15px" }} /> <span>{cartNumber}</span>
                            </Button>
                        </>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
