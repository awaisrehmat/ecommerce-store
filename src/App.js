import React from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

import LanPage from "./components/LandingPage";
import TopMenu from "./components/TopBar";
import Contact from "./components/Contact";
import Products from "./components/Products";
import PageNotFound from "./components/NotFound";


function App() {
 return(
    <Router>
 <div>
 <TopMenu />

   <div style={{padding:'10px'}}>

    <Routes>
   <Route exact path="/contact-us" element={<Contact/>}/>
    <Route exact path="/products" element={<Products/>}/>
    
    <Route exact path="/" element={<LanPage/>}/>

    <Route path="*" element={<PageNotFound/>}/>
   </Routes>

   </div>

 </div>

 </Router>

 );
}

export default App;
