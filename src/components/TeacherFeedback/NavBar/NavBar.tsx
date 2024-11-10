import logo from '../../../assets/svg/logo.svg'
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div
            className="h-[100px] w-screen bg-[#03B04B] flex items-center px-[5%]"
        >
            <img
                alt="logo SaeComp"
                src={logo}
                className="h-[40%] cursor-pointer"
                onClick={() => navigate('/')}
            />
        </div>
    )
};

export default NavBar;