import Navbar from "../../components/navbar/Navbar";
import Footer from  "../../components/footer/Footer";
import ContactHero from "../../components/contacthero/ContactHero";
import ContactSection from "../../components/contactsection/ContactSection";

function Contact() {
    return (
        <div>
            <Navbar />
            <ContactHero/>
            <ContactSection/>
            <Footer />
        </div>
    );
}

export default Contact;