
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import SearchEngineOptimization from "./Components/Modals/Modalnavigation/SearchEngineOptimization"
import SocialMediaMarketing from "./Components/Modals/Modalnavigation/SocialMediaMarketing"
import ContentMarketing from "./Components/Modals/Modalnavigation/ContentMarketing"
import CustomWebDevelopement from "./Components/Modals/Modalnavigation/CustomWebDevelopement"
import MobileAppDevelopment from "./Components/Modals/Modalnavigation/MobileAppDevelopment"
import CMSDevelopement from "./Components/Modals/Modalnavigation/CMSDevelopement"
import ECommerceDevelopement from "./Components/Modals/Modalnavigation/ECommerceDevelopement"
import WebsiteMaintainance from "./Components/Modals/Modalnavigation/WebsiteMaintainance"
import PHPdevelopment from "./Components/Modals/Modalnavigation/PHPdevelopment"
import LogoDesigning from "./Components/Modals/Modalnavigation/LogoDesigning"
import BroucherDesigning from "./Components/Modals/Modalnavigation/BroucherDesigning"
import BussinessCardDesigning from "./Components/Modals/Modalnavigation/BussinessCardDesigning"

function App() {
  return (
    
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/Search Engine Optimization" component={SearchEngineOptimization}/>
          <Route exact path="/Social Media Marketing" component={SocialMediaMarketing}/>
          <Route exact path="/Content Marketing" component={ContentMarketing}/>
          <Route exact path="/Custom Web Developement" component={CustomWebDevelopement}/>
          <Route exact path="/Mobile App Development" component={MobileAppDevelopment}/>
          <Route exact path="/CMS Developement" component={CMSDevelopement}/>
          <Route exact path="/E-Commerce Developement" component={ECommerceDevelopement}/>
          <Route exact path="/Website Maintainance" component={WebsiteMaintainance}/>
          <Route exact path="/PHP development" component={PHPdevelopment}/>
          <Route exact path="/Logo Designing" component={LogoDesigning}/>
          <Route exact path="/Broucher Designing" component={BroucherDesigning}/>
          <Route exact path="/Bussiness Card Designing" component={BussinessCardDesigning}/>
          <Redirect to = "/" />
          </Switch>
        </div> 
                                   
     )
}
export default App;
