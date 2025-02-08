import { NavLink } from "react-router";
import logo from "../../../../src/assets/Images/Logo/logo.png";
const Navbar = ({flag,goLink}) => {
    return (
    <div className="">       
               <div className="py-5">
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="">                    
                <img data-aos="zoom-in" className="w-auto h-[30px] md:h-[50px]" src={logo} alt="Company Logo" />                                                               
            </div>
            <div className="">
                <div className="">
                <NavLink to={goLink}>
                    <img data-aos="zoom-in" className="w-[30px]" src={flag} alt="" />
                </NavLink>
                </div>
            </div>
        </div>          
    </div>
    </div>    
        
    );
};

export default Navbar;