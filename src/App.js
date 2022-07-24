import React from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

import LanPage from "./components/LandingPage";
import TopMenu from "./components/TopBar";
import contact from "./components/contact"
import products from "./components/products";


function App() {
 return(
    <Router>
 <div>
 <TopMenu />
    <Routes>
    <Route exact path="/contact-us" element={<contact/>}/>
    <Route exact path="/products" element={<products/>}/>
    <Route exact path="/" element={<LanPage/>}/>
        
    </Routes>
    
 </div>

 </Router>

 );
}

export default App;
