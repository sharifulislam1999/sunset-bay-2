import "./counter.css";
import vacations from "../../../assets/Images/Icons/vacations.png";
import burjkhalifa from "../../../assets/Images/Icons/burj-khalifa.png";
import mall from "../../../assets/Images/Icons/shopping-mall.png";
import airport from "../../../assets/Images/Icons/airport.png";
const Counters = ({first,firstText,secend,secendText,third,thirdText,four,fourText}) => {
    return (        
        <div className="py-20 bg-linear-to-b from-[#EFE8DF] to-[#FEFCF9]">
            <div className="container mx-auto px-3 own-font">
                <div className="flex md:flex-row flex-col gap-4 justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <div data-aos="zoom-in" className="w-[50px] h-[50px] p-3 rounded-full border border-[#BE917C] mb-2">
                            <img src={vacations} alt="" />
                        </div>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[24px] text-[#BE917C] text-center leading-[120%] font-medium">{first}</h4>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[20px] text-[#BE917C] text-center leading-[120%] font-medium">{firstText}</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div data-aos="zoom-in" className="w-[50px] h-[50px] p-3 rounded-full border border-[#BE917C] mb-2">
                            <img src={airport} alt="" />
                        </div>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[24px] text-[#BE917C] text-center leading-[120%] font-medium">{secend}</h4>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[20px] text-[#BE917C] text-center leading-[120%] font-medium">{secendText}</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div data-aos="zoom-in" className="w-[50px] h-[50px] p-3 rounded-full border border-[#BE917C] mb-2">
                            <img src={burjkhalifa} alt="" />
                        </div>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[24px] text-[#BE917C] text-center leading-[120%] font-medium">{third}</h4>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[20px] text-[#BE917C] text-center leading-[120%] font-medium">{thirdText}</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div data-aos="zoom-in" className="w-[50px] h-[50px] p-3 rounded-full border border-[#BE917C] mb-2">
                            <img className="w-full" src={mall} alt="" />
                        </div>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[24px] text-[#BE917C] text-center leading-[120%] font-medium">{four}</h4>
                        <h4 data-aos="zoom-in" className="text-[16px] lg:text-[20px] text-[#BE917C] text-center leading-[120%] font-medium">‍{fourText}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counters;