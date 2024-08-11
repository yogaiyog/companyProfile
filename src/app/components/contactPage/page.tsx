import ContactForm from "../contactForm/page";
import ContactUs from "../contactUs/page";


const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Contact Information */}
        <ContactUs />
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;