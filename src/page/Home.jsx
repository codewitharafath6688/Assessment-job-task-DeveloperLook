import Agency from "../component/Agency";
import Banner from "../component/Banner";
import CardAnimation from "../component/CardAnimation";
import Featured from "../component/Featured";
import Footer from "../component/Footer";
import LiveDashboard from "../component/LiveDashboard";
import Navber from "../component/Navber";
import NewSection from "../component/NewSection";
import Service from "../component/Service";
import TextScrollingSide from "../component/TextScrollingSide";
import TextTransform from "../component/TextTransform";

const Home = () => {
  return (
    <div className="mb-4 min-h-screen w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <LiveDashboard />
      <Navber />
      <Agency />
      <Banner />
      <Featured />
      <Service />
      <TextScrollingSide />
      <CardAnimation />
      <NewSection />
      <TextTransform />
      <Footer />
    </div>
  );
};

export default Home;
