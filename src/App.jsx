import Footer from "./components/Footer/Footer";
import Headers_presentation from "./components/Headers_presentation/Headers_presentation";
import Hero from "./components/Hero/Hero";
import Section_Seo from "./components/Section_Seo/Section_Seo";

function App() {
  return (
    <>
      <div className="container pb-10px m-auto w-auto h-auto">
        <Hero />
        <Headers_presentation />
      </div>

      <div className="background-color mx-auto">
        <Section_Seo />

        <Footer />
      </div>
    </>
  );
}

export default App;
