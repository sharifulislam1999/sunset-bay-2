import footerLogo from "../../../../src/assets/Images/Logo/logo.png"
const Footer = ({title}) => {
    return (
        <div className="own-font py-10 md:py-16 lg:py-20 bg-[#EFE8DE]">
            <div className="flex justify-center items-center gap-10 flex-col overflow-hidden">
                <h3 className="text-[24px] text-center lg:text-[40px] text-[#BE917C]" data-aos="fade-up">{title}</h3>
                <img className="w-[180px]" src={footerLogo} alt="" />
            </div>
        </div> 
    );
};
export default Footer;