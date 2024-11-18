import NavBar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Footer from './components/Footer';
import Section5 from './components/sections/Section5';
import Section4 from './components/sections/Section4';
import MailForm from './components/ui/forms/MailForm';
// import LikingSurvey from './components/Surveys/LikingSurvey';

export default function Home() {
  return (
    <>
      <NavBar />
      <Section1 />
      <MailForm />
      <Section4 />
      {/* <LikingSurvey /> */}
      <MailForm />
      <Section2 />
      <Section5 />
      <hr className="bg-white w-full" aria-hidden="true" />
      <Footer />
    </>
  );
}
