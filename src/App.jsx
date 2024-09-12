import Footer from "./components/Footer/Footer";
import Headers_presentation from "./components/Headers_presentation/Headers_presentation";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import SEO from "./components/SEO/SEO.JSX";

function App() {
  return (
    <>
      <div className="container mx-auto pt-5 pb-10px">
        <Navigation />
        <Hero />
        <Headers_presentation />
      </div>
      <div className="background-color mx-auto">
        <SEO />
        <Footer />
      </div>
    </>
  );
}

export default App;
