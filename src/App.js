import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import Principal from './Components/Principal';
import Gallery from './Components/Gallery';
import Staff from './Components/Staff';
import Slider from './Components/Slider';
import Notice from './Components/Notice';

function App() {
  return (
  <>
  <Nav />
  <br />
  <div className='home'>
  
  <Intro />
  </div>
  <Principal />
   <Gallery />
   <Slider />

  <Staff />
  <Notice />
  </>
  );
}

export default App;
