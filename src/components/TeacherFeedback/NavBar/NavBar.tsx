import { Box } from "@mui/material";
import logo from '../../../assets/svg/logo.svg'
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                height: '100px',
                width: '100vw',
                bgcolor: '#03B04B',
                display: 'flex',
                alignItems: 'center',
                paddingX: '5%'
            }}
        >
            <Box
                component='img'
                alt="logo SaeComp"
                src={logo}
                sx={{
                    height: '40%',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
            />

        </Box>
    )

};

export default NavBar;