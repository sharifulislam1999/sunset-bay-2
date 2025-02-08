import { NavLink } from "react-router";
import logo from "../../../../src/assets/Images/Logo/logo.png";
import flag from "../../../../src/assets/Images/Logo/russia.png";
const Russiannavbar = () => {
    return (
    <div className="">
               <div className="py-5">
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="">
                     <NavLink to="/ru">
                        <img data-aos="zoom-in" className="w-auto h-[30px] md:h-[50px]" src={logo} alt="Company Logo" />
                    </NavLink>
            </div>
            <div className="">
                <div>
                    <a href="#">
                        <img data-aos="zoom-in" className="w-[30px]" src={flag} alt="" />
                    </a>
                </div>
            </div>
        </div>          
    </div>
    </div>        
    );
};

export default Russiannavbar;