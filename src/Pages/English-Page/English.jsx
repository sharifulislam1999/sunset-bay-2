import Hero from './../Components/Hero/Hero';
import Feature from './../Components/Feature/Feature';
import Venice from './../Components/Venice/Venice';
import Payment from './../Components/Payment/Payment';
import Amenities from './../Components/Amenities/Amenities';
import Counters from './../Components/Counters/Counters';
import Map from './../Components/Map/Map';
import Contact from './../Components/Contact/Contact';
import Footer from './../Components/Footer/Footer';
import englishImage from "../../../src/assets/Images/Logo/german.png";
import { Helmet } from 'react-helmet';
const English = () => {
    return (
    <>
        <Helmet>
            <title>NEW APARTMENTS & TOWNHOUSES</title>
            <meta content="Luxury Apartment & Townhouses surrounded by recreational and entertainment facilities. Perfect Opportunity for Early Investor Benefits (High Capital Appreciation) - & Upto 15% ROI" name="description"></meta>
        </Helmet>
       <Hero flag={englishImage} goLink="/german" title="SUNSET BAY 2 BY IMTIAZ DEVELOPMENT" location="Dubai Islands" paragraph="YOUR GATEWAY TO ISLAND LIVING" paragraph2="Beyond the gates, a life framed by pristine shores and effortless elegance awaits."  formHead="SUNSET BAY 2" formPara="Speak To A Real Estate Specialist Today!" name="Name" phone="Phone" email="Email" cta="request a call back"></Hero>
       <Payment title="Project Details" first="Bedroom Apartments" secend="Payment Plan" third="Starting From AED" cta="GET DETAILED PAYMENT PLAN"></Payment>
       <div className="container mx-auto px-3 own-font">
       <Feature topheading="" heading="Experience the Essence of Island Living" paragraph="Discover Sunset Bay 2 by Imtiaz, an exclusive retreat on the pristine shores of Dubai Islands. Designed to blend modern elegance with serene coastal charm, each residence offers a lifestyle of sophistication and privacy. Enjoy expansive terraces, floor-to-ceiling windows, and stunning waterfront views, creating the perfect sanctuary by the sea." cta="Register Your Interest"></Feature>
       </div>
       <Venice title="SUNSET BAY 2" paragraph="Step into a world of refined luxury, where every detail is meticulously crafted to perfection. Miele-equipped kitchens, Gessi fittings, and Villeroy & Boch finishes elevate your everyday living experience. Designed with open-concept layouts, these residences are bathed in natural light, offering plush bedrooms, spa-inspired bathrooms, and expansive living spaces for ultimate comfort."></Venice>   
    
       <Amenities title="SUNSET BAY 2 AMENITIES" first="Outdoor cinema" secend="Water lounges" third="Jacuzzi" four="Kids' playground" five="Outdoor yoga space" six="Private terraces" seven="Clubhouse & Gym" eight="BBQ & dining areas" nine="Sunken lounges" ten="Floating islands"></Amenities>
       <Counters first="2 mins to" firstText="The Beach" secend="12 mins to" secendText="Dubai International Airport" third="16 mins to" thirdText="Downtown Dubai" four="16 Mins to" fourText="Dubai Mall with the new bridge coming"></Counters>
       <Map title="Location of SUNSET BAY 2"></Map>
       <Contact title="Get Expert Guidance" paragraph="Fill in your details, and our experts will reach out with personalised recommendations." cta="Submit" name="Name" phone="Phone" email="Email"></Contact>
       <Footer title="CONTACT NOW FOR MORE DETAILS"></Footer>    
    </>    
    );
};

export default English;