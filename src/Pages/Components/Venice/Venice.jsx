import feature1 from "../../../assets/Images/featureimage-1.jpg";
import feature2 from "../../../assets/Images/featureimage-2.jpg";
import feature3 from "../../../assets/Images/feature-image-3.jpg";
const Venice = ({title,paragraph}) => {
    return (
        <div className="md:py-[60px] py-[40px] lg:py-[100px] bg-[#EFE8DE]">
            <div className="container mx-auto px-3 own-font">
                <div className="flex flex-col gap-5 lg:gap-[50px]">
                    <div className="flex flex-col gap-2 md:gap-6 justify-center items-center">
                        <div className="overflow-hidden">
                            <h1 data-aos="fade-up" className="md:text-[32px] text-[24px] lg:text-[48px] text-[#BE917C] font-[500] leading-[57px]">{title}</h1>
                        </div>
                        <div className="overflow-hidden">
                            <p data-aos="fade-up" className="text-center text-base md:text-[20px] text-[#BE917C] font-normal leading-[24px] max-w-[800px]">{paragraph}</p>
                        </div>
                    </div>
                <div className="flex gap-3 md:gap-4 flex-col md:flex-row items-center">
                    <div>
                        <img data-aos="zoom-in" className="rounded-[20px] h-[280px] md:w-full lg:w-[500px] object-cover" src={feature3} alt="" />               
                    </div>
                    <div>
                    <img data-aos="zoom-in" className="rounded-[20px] h-[400px] object-cover" src={feature2} alt="" />               
                    </div>
                    <div>
                    <img data-aos="zoom-in" className="rounded-[20px] h-[280px] md:w-full lg:w-[500px] object-cover" src={feature1} alt="" />               
                    </div>
                </div>
                </div>            
            </div>    
        </div>
    );
};

export default Venice;