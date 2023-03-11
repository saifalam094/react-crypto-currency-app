
 import {BrowserRouter as Router , Routes ,Route}from "react-router-dom"
 import Footer from "./components/Footer";
import CoinsDetails from "./components/CoinsDetails";
import Exchanges from "./components/Exchanges";
 import Header from "./components/Header"
 import Home from "./components/Home"
 import Coins from "./components/Coins"


function App() {
  return (
     <Router>
     <Header/> 
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinsDetails/>}/>
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
