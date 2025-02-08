import img1 from "../../../assets/Images/amenities/outdoor-cinema.png";
import img2 from "../../../assets/Images/amenities/pool.png";
import img3 from "../../../assets/Images/amenities/jacuzzi.png";
import img4 from "../../../assets/Images/amenities/playground.png";
import img5 from "../../../assets/Images/amenities/treadmill.png";
import img6 from "../../../assets/Images/amenities/terrace.png";
import img7 from "../../../assets/Images/amenities/serene.png";
import img8 from "../../../assets/Images/amenities/table.png";
import img9 from "../../../assets/Images/amenities/bar-counter.png";
import img10 from "../../../assets/Images/amenities/tropical-island.png";

const Amenities = ({title,first,secend,third,four,five,six,seven,eight,nine,ten}) => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const labels = [first, secend, third, four, five, six, seven, eight, nine, ten];
    return (
        <div className="bg-[#f5f5f5] py-[40px] md:py-[60px] lg:py-[100px]">
          <div className="container mx-auto px-3 own-font">
            <div className="flex flex-col gap-8">
              <div className="overflow-hidden">
                <h3 data-aos="fade-up" className="text-center text-[#BE917C] text-[30px] lg:text-[48px] leading-[120%]">
                  {title}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-[600px] mx-auto">
                {images.map((img, index) => (
                  <div key={index} className="flex flex-col items-center gap-2" data-aos="zoom-in">
                    <div>
                      <img className="w-[50px]" src={img} alt="" />
                    </div>
                    <div>
                      <h6 className="text-[14px] lg:text-[20px] text-[#BE917C]">{labels[index]}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Amenities;