import { Hero, Faq, Benefits, CallToAction, Feature } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[70vh] border border-white py-20 px-[20em] ">
        <Hero />
      </div>

      <div className="h-[50vh]">
        <Faq />
      </div>

      <Benefits />
      <CallToAction />
      <Feature />
    </div>
  );
};

export default Home;
