import featureImage from "../../../assets/Images/sunsetfeature.jpg"
import "./feature.css"
const Feature = ({topheading,heading,paragraph,cta}) => {
    return (
        <div className="md:py-[60px] py-[40px] flex flex-col md:flex-row gap-[50px]">
            <div className="w-full md:w-[50%] flex md:gap-2 lg:gap-6 flex-col justify-center">
                <div className="overflow-hidden">
                    <h2  data-aos="fade-up" className="text-[24px] md:text-[30px] lg:text-[40px] leading-[120%] font-[400] text-[#BE917C]">{topheading}</h2>
                </div>
                <div className="overflow-hidden">
                    <h2 data-aos="fade-up" className="md:text-[36px] text-[24px] lg:text-[48px] leading-[120%] mb-2 text-[#BE917C] font-[700]">{heading}</h2>
                </div>
                <div className="overflow-hidden">
                    <p data-aos="fade-up" className="text-[16px] leading-[120%] lg:text-[20px] text-[#BE917C]">{paragraph}</p>
                </div>
                <div className="mt-6" >
                    <a data-aos="zoom-in" href="#" className="text-base md:text-[20px] rounded-lg bg-[#BE917C] text-white uppercase font-[700] leading-[120%] py-[12px] px-[24px]">{cta}</a>
                </div>
            </div>
            <div className="w-full md:w-[50%]">
                <img data-aos="zoom-in" src={featureImage} className="object-cover rounded-2xl md:rounded-[50px] h-auto md:h-[600px]" alt="" />
            </div>

           
            
        </div>
    );
};

export default Feature;