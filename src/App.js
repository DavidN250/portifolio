import './App.css';
import './css/main.css'
import CustomNabBar from './components/CustomNabBar';
import HeroSection from './components/HeroSection';
import About from './components/About';

function App() {
  return (
    <div className="App from-teal-600 ">
    <CustomNabBar/>
    <HeroSection/>
    <About/>
    </div>
  );
}

export default App;
