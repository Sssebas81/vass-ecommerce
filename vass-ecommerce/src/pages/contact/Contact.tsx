import Navbar from "../../components/navbar/Navbar";
import Footer from  "../../components/footer/Footer";
import ContactHero from "../../components/contacthero/ContactHero";
import ContactSection from "../../components/contactsection/ContactSection";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";

function Contact() {
    return (
        <div>
            <Navbar />
            <ContactHero/>
            <ContactSection/>
            <FeaturesBar/>
            <Footer />
        </div>
    );
}

export default Contact;