import { useState } from "react";
import "./contact.css";
import { ToastContainer,toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
const Contact = ({title,paragraph,cta,name,phone,email}) => {
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        email:""
    });
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
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    }
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
        <div className="contact own-font h-auto md:h-[748px]" id="contact">
            <ToastContainer></ToastContainer>
            <div className="container mx-auto px-3 md:py-24 py-16 lg:py-32 own-font">
                <div className="flex flex-col gap-4 lg:gap-5 w-full md:w-[600px]">
                    <div className="flex flex-col gap-2 lg:gap-4 overflow-hidden">
                        <h3 className="text-[30px] lg:text-[48px] text-white" data-aos="fade-up">{title}</h3>
                        <p className="text-white text-[20px] font-normal leading-[120%]" data-aos="fade-up">{paragraph}</p>
                    </div>
                    <div>
                        <form action="#" className="w-full md:w-[70%] flex flex-col md:gap-3 gap-2 lg:gap-6" data-aos="zoom-in" onSubmit={sendEmail} autoComplete="off">
                            <div>
                                <input name="name" onChange={handleChange} className="w-full outline-none py-2 border rounded text-white border-white px-2" type="text" placeholder={name} required/>
                            </div>
                            <div>
                                <input name="phone" onChange={handleChange} className="w-full py-2 border outline-none rounded text-white border-white px-2" type="phone" placeholder={phone} required/>
                            </div>
                            <div>
                                <input name="email" onChange={handleChange} className="w-full py-2 border outline-none rounded text-white border-white px-2" type="email" placeholder={email} required />
                            </div>
                            <div>
                                <input type="submit" className="bg-[#BE917C] text-white py-2 px-6 rounded text-[20px] transition  duration-300  cursor-pointer border border-[#BE917C] hover:bg-transparent hover:text-white " value={cta} />
                            </div>
                        </form>
                    </div>                
                </div>                
            </div>
           
        </div>
    );
};

export default Contact;