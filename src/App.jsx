import "./App.css";
import Footer from "./components/Footer/Footer";
import Headers_presentation from "./components/Headers_presentation/Headers_presentation";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div className="container mx-auto pt-10 pb-20px">
        <Navigation />
        <Hero />
        <Headers_presentation />
        <Footer />
      </div>
    </>
  );
}

export default App;
