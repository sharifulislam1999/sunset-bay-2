const Map = ({title}) => {
    return (
        <div className="md:[py-60px] py-[40px] lg:py-[100px]">
            <div className="container mx-auto px-3 own-font">
                <div className="flex flex-col gap-8">
                <div className="overflow-hidden">
                    <h4 data-aos="fade-up" className="text-[#BE917C] text-[30px] lg:text-[48px] leading-[120%] text-center font-medium">{title}</h4>
                </div>
                    <div data-aos="zoom-in">
                        <iframe className="w-full h-[300px] lg:h-[490px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8698.336760373651!2d55.293444226432825!3d25.28429581982419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4562fde15297%3A0x65d8a7b80d629f63!2sSunset%20Bay%202%20by%20Imtiaz!5e1!3m2!1sen!2sbd!4v1738957705541!5m2!1sen!2sbd" frameborder="0"></iframe>
                    </div>                    
                </div>               
            </div>
        </div>
    );
};

export default Map;