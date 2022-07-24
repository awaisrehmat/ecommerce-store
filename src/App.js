import React from "react";
import { BrowserRouter as Router, Routes , Route , Redirect} from "react-router-dom";

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
    <Routes>
   <Route exact path="/contact-us" element={<Contact/>}/>
    <Route exact path="/products" element={<Products/>}/>
    
    <Route exact path="/" element={<LanPage/>}/>

    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
 </div>

 </Router>

 );
}

export default App;
