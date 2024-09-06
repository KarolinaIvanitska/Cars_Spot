import "./App.css";
import Footer from "./components/Footer/Footer";
import Headers_presentation from "./components/Headers_presentation/Headers_presentation";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="container mx-auto pt-5 pb-10px">
        <Hero />
        <Headers_presentation />
        <Footer />
      </div>
    </>
  );
}

export default App;
