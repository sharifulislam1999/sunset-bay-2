const Payment = ({title,first,secend,third,cta}) => {
    return (
        <div className="container mx-auto px-3 py-[70px] md:py-[60px] lg:pt-[100px] lg:pb-[50px] own-font">
            <div className="p-5 md:p-[50px] bg-linear-to-b flex flex-col gap-10 from-[#EFE8DF] to-[#FEFCF9] rounded-[30px] border border-[#BE917C]">
                <div className="flex flex-col gap-[20px] md:gap-[30px]">
                    <div className="overflow-hidden">
                        <h2 data-aos="fade-up" className="text-center text-[30px] lg:text-[48px] text-[#BE917C] ">{title}</h2>
                    </div>
                    <div className="flex justify-between gap-5 flex-col md:flex-row items-center">
                        <div data-aos="zoom-in" className="flex flex-col items-center">
                            <h5 className="text-[30px] lg:text-[48px] text-[#BE917C] font-[700] leading-[120%]">1 , 2 & 3</h5>
                            <p className="text-[18px] lg:text-[24px] text-[#BE917C] leading-[28px] font-[500]">{first}</p>
                        </div>
                        <div  data-aos="zoom-in" className="w-full md:w-2 bg-[#BE917C] h-[2px] md:h-16"></div>
                        <div  data-aos="zoom-in" className="flex flex-col items-center">
                            <h5 className="text-[30px] lg:text-[48px] text-[#BE917C] font-[700] leading-[120%]">60/40</h5>
                            <p className="text-[18px] lg:text-[24px] text-[#BE917C] leading-[28px] font-[500]">{secend}</p>
                        </div>
                        <div  data-aos="zoom-in" className="w-full md:w-2 bg-[#BE917C] h-[2px] md:h-16"></div>
                        <div  data-aos="zoom-in" className="flex flex-col items-center">
                            <h5 className="text-[30px] lg:text-[48px] text-[#BE917C] font-[700] leading-[120%]">1.8M</h5>
                            <p className="text-[18px] lg:text-[24px] text-[#BE917C] leading-[28px] font-[500]">{third}</p>
                        </div>
                    </div>
                </div>   
                <div className="flex justify-center">
                    <a href="#contact" data-aos="zoom-in" className="uppercase md:text-[16px] lg:text-[22px] px-4 py-2 form-submit cursor-pointer bg-[#BE917C] border border-[#BE917C] hover:bg-transparent text-white hover:text-[#BE917C] transition duration-300 rounded-md text-center">{cta}</a>
                </div>             
            </div>
        </div>
      
    );
};

export default Payment;