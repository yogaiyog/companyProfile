import BriefPrograms from "../components/briefPrograms/page";
import ContactPage from "../components/contactPage/page";
import Footer from "../components/footer/page";
import Hero from "../components/hero/page";
import Numbers from "../components/numbers/page";
import Overview from "../components/overview/page";
import Testimonials from "../components/testimonials/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Testimonials />
      <Numbers />
      <BriefPrograms />
      <ContactPage />
      <Footer/>
    </main>
  );
}
