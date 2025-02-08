import Hero from '../Components/Hero/Hero';
import Feature from '../Components/Feature/Feature';
import Venice from '../Components/Venice/Venice';
import Payment from '../Components/Payment/Payment';
import Amenities from '../Components/Amenities/Amenities';
import Counters from '../Components/Counters/Counters';
import Map from '../Components/Map/Map';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import flag from "../../../src/assets/Images/Logo/us-flag.png";
import { Helmet } from 'react-helmet';
const German = () => {
    return (
      <>
        <Helmet>
            <title>NEW APARTMENTS & TOWNHOUSES</title>
            <meta content="Luxury Apartment & Townhouses surrounded by recreational and entertainment facilities. Perfect Opportunity for Early Investor Benefits (High Capital Appreciation) - & Upto 15% ROI" name="description"></meta>
        </Helmet>
       <Hero flag={flag} goLink="/english" title="Sunset Bay 2 von Imtiaz Development" location="Dubai Islands" paragraph="IHR TOR ZUM INSELLEBEN" paragraph2="Hinter den Toren erwartet Sie ein Leben, umrahmt von unberührten Küsten und müheloser Eleganz."  formHead="SUNSET BAY 2" formPara="Sprechen Sie noch heute mit einem Immobilienspezialisten!" name="Name" phone="Telefon" email="Email" cta="Bitten Sie um einen Rückru"></Hero>
       <Payment title="Projektdetails" first="Schlafzimmerwohnungen" secend="Zahlungsplan" third="Ausgehend vom AED" cta="ERHALTEN SIE EINEN DETAILLIERTEN ZAHLUNGSPLAN"></Payment>
       <div className="container mx-auto px-3 own-font">
       <Feature topheading="" heading="Erleben Sie luxuriöses Inselwohnen in Dubai" paragraph="Sunset Bay 2 by Imtiaz bietet ein exklusives Wohnkonzept auf den Dubai Islands, das moderne Eleganz mit idyllischer Küstenatmosphäre verbindet. Jedes Apartment verfügt über großzügige Terrassen, bodentiefe Fenster und einen spektakulären Blick auf das Wasser." cta="Register Your Interest"></Feature>
       </div>
       <Venice title="SUNSET BAY 2" paragraph="Step into a world of refined luxury, where every detail is meticulously crafted to perfection. Miele-equipped kitchens, Gessi fittings, and Villeroy & Boch finishes elevate your everyday living experience. Designed with open-concept layouts, these residences are bathed in natural light, offering plush bedrooms, spa-inspired bathrooms, and expansive living spaces for ultimate comfort."></Venice>   
    
       <Amenities title="Exklusive Annehmlichkeiten" first="Freiluftkino" secend="Wasser-Lounges" third="Private Jacuzzis" four="Kids' playground" five="Outdoor yoga space" six="Private terraces" seven="Clubhouse & Gym" eight="BBQ & dining areas" nine="Sunken lounges" ten="schwimmende Inseln"></Amenities>
       <Counters first="2 Minuten zum" firstText="Strand" secend="12 Minuten zum" secendText="Dubai International Airport" third="16 Minuten zum" thirdText="Stadtzentrum" four="16 Minuten" fourText="Dubai Mall (mit neuer Brückenverbindung)"></Counters>
       <Map title="Standort von SUNSET BAY 2"></Map>
       <Contact title="Holen Sie sich fachkundige Beratung" paragraph="Geben Sie Ihre Daten ein und unsere Experten werden Sie mit individuellen Empfehlungen kontaktieren." cta="einreichen" name="Name" phone="Telefon" email="Email"></Contact>
       <Footer title="Kontaktieren Sie uns jetzt für weitere Details"></Footer>    
    </>     
    );
};

export default German;