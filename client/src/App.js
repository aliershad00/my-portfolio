import {Routes , Route ,useLocation} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles" ;
import particlesOptions from './utilsJs/particlesOptions';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navbar';
import './App.scss';

function App() {

  const location = useLocation();
 

const handelInit = async(main)=>{
  await loadFull(main);
};
  
const renderparticleJsInHomePage = location.pathname==="/";//the path name is taken in a variable.
  
  return (
    <div className="App">
      <ToastContainer/>
      

  {/*prticales js */}

{
  renderparticleJsInHomePage &&   <Particles id='tsparticles' init={handelInit} options={particlesOptions} />//making a condition to perform the task , if the path (var)

}


  {/* navbar */}
  <Navbar/>

  {/* main page content */}
  <Routes>
    <Route index path='/' element={<Home/>} />
    <Route path='/about' element ={<About/>} />
    <Route path='/resume' element ={<Resume/>} />
    <Route path='/skills' element ={<Skills/>} />
    <Route path='/portfolio' element ={<Portfolio/>} />
    <Route path='/contact' element ={<Contact/>} />
     
  </Routes>
    </div>
  );

};
export default App;
