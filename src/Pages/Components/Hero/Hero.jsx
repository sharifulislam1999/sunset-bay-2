import { IoLocationOutline } from "react-icons/io5";
import "./hero.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer,toast } from 'react-toastify';
const Hero = ({ flag, goLink, title, location, paragraph, paragraph2, formHead, formPara, name, phone, email, cta }) => {
  const notify = () => toast.success('Thank you for sharing your interest. We will get in touch with you very soon.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        notify();
        setFormData({ name: "", phone: "", email: "" });
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        alert("Error sending email. Please try again.");
      });
  };
  return (
    <div className="h-auto md:h-[100vh] hero bg-cover bg-center own-font flex flex-col items-center">
      <ToastContainer></ToastContainer>
      <div className="container mx-auto px-3">
        <Navbar flag={flag} goLink={goLink} />
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20 text-white h-[100vh] items-center justify-center">
          {/* Left Content */}
          <div className="w-full md:w-[50%] flex flex-col gap-3 pt-[150px] md:pt-0">
            <h1 className="font-bold uppercase text-[24px] md:text-[30px] lg:text-[50px] leading-[120%]" data-aos="fade-up">
              {title}
            </h1>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-2xl" data-aos="fade-left" />
              <h3 className="text-[20px] md:text-[32px]" data-aos="fade-right">
                {location}
              </h3>
            </div>
            <p className="text-xl font-semibold text-[#BE917C] italic" data-aos="fade-up">
              {paragraph}
            </p>
            <p data-aos="fade-up">{paragraph2}</p>
          </div>
          <div className="w-full md:w-[50%] flex justify-center">
            <div className="w-full md:w-[400px] p-[16px] md:p-[20px] lg:p-[35px] rounded-[30px] bg-[#00000080]" data-aos="zoom-in">
              <form className="flex flex-col gap-6" onSubmit={sendEmail} autoComplete="off">
                <div className="text-center">
                  <h3 className="text-[26px] lg:text-[32px]">{formHead}</h3>
                  <p className="text-[16px] md:text-[20px]">{formPara}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={name}
                    value={formData.name}
                    onChange={handleChange}
                    className="border text-white outline-none w-full px-2 py-2 rounded-md bg-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="border text-white outline-none w-full px-2 py-2 rounded-md bg-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={email}
                    value={formData.email}
                    onChange={handleChange}
                    className="border text-white outline-none w-full px-2 py-2 rounded-md bg-transparent"
                    required
                  />
                  <button type="submit" className="bg-[#BE917C] text-white uppercase border border-[#BE917C] hover:bg-transparent transition duration-300 md:text-[16px] lg:text-[22px] w-full px-2 py-2 rounded-md cursor-pointer">
                    {cta}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
