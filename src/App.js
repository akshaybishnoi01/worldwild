
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Herosection from './components/Herosection';
import Socialicons from './components/Socialicons';
import Aboutus from './components/Aboutus';
import Tokenonmics from './components/Tokenonmics';
import Utility from './components/Utility';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Latestnew from './components/Latestnew';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Herosection />
      <Socialicons />
      <Aboutus />
      <Tokenonmics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <Latestnew />
      <Footer />
    </>
  );
}

export default App;
