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
       <Hero flag={flag} goLink="/english" title="Sunset Bay 2 von Imtiaz Development" location="Dubai Islands" paragraph="IHR TOR ZUM INSELLEBEN" paragraph2="Hinter den Toren erwartet Sie ein Leben, umrahmt von unberührten Küsten und müheloser Eleganz."  formHead="SUNSET BAY 2" formPara="Sprechen Sie noch heute mit einem Immobilienspezialisten!" name="Name" phone="Telefon" email="Email" cta="Bitten Sie um einen Rückruf"></Hero>
       <Payment title="Projektdetails" first="Schlafzimmerwohnungen" secend="Zahlungsplan" third="Startpreis in AED" cta="ERHALTEN SIE EINEN DETAILLIERTEN ZAHLUNGSPLAN"></Payment>
       <div className="container mx-auto px-3 own-font">
       <Feature topheading="" heading="Erleben Sie luxuriöses Inselwohnen in Dubai" paragraph="Sunset Bay 2 by Imtiaz bietet ein exklusives Wohnkonzept auf den Dubai Islands, das moderne Eleganz mit idyllischer Küstenatmosphäre verbindet. Jedes Apartment verfügt über großzügige Terrassen, bodentiefe Fenster und einen spektakulären Blick auf das Wasser." cta="Melden Sie sich an"></Feature>
       </div>
       <Venice title="SUNSET BAY 2" paragraph="Betreten Sie eine Welt des erlesenen Luxus, in der jedes Detail sorgfältig und perfekt ausgearbeitet ist. Küchen mit Miele-Ausstattung, Armaturen von Gessi und Oberflächen von Villeroy & Boch werten Ihr alltägliches Wohnerlebnis auf. Diese Residenzen sind mit offenem Grundriss gestaltet, in natürliches Licht getaucht und bieten luxuriöse Schlafzimmer, Badezimmer im Spa-Stil und großzügige Wohnräume für ultimativen Komfort."></Venice>   
    
       <Amenities title="Exklusive Annehmlichkeiten" first="Freiluftkino" secend="Wasser-Lounges" third="Private Whirlpools" four="Kinderspielplatz" five="Yoga Bereich im Freien" six="Private Terrassen" seven="Clubhaus & Fitnessstudio" eight="Grill- und Essbereiche" nine="Sunken lounges" ten="Badeinsel"></Amenities>
       <Counters first="2 Minuten zum" firstText="Strand" secend="12 Minuten zum" secendText="Dubai International Airport" third="16 Minuten zum" thirdText="Stadtzentrum" four="16 Minuten zur" fourText=" Dubai Mall"></Counters>
       <Map title="Standort von SUNSET BAY 2"></Map>
       <Contact title="Holen Sie sich fachkundige Beratung" paragraph="Geben Sie Ihre Daten ein und unsere Experten werden Sie mit individuellen Empfehlungen kontaktieren." cta="Anmelden" name="Name" phone="Telefon" email="Email"></Contact>
       <Footer title="Kontaktieren Sie uns jetzt für weitere Details"></Footer>    
    </>     
    );
};

export default German;