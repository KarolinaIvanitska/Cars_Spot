import Footer from "./components/Footer/Footer";
import Headers_presentation from "./components/Headers_presentation/Headers_presentation";
import Hero from "./components/Hero/Hero";
import SEO from "./components/SEO/SEO.JSX";

function App() {
  return (
    <>
      <div className="container pb-10px m-auto w-auto h-auto">
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
