import React from 'react';
import './App.css';

import Tech from "./Components/Tech";
import Service from "./Components/Service";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="App">
            
            <Tech/>
            Bekzod Developer
            <Service/>
            <Footer/>
        </div>
    );
}



export default App;
