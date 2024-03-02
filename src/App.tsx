import React from "react";

import Navbar from "./Components/Navbar/index";
import FirstSection from "./Components/FirstSection/index";
import SecondSection from "./Components/SecondSection/index";
import ThirdSection from "./Components/ThirdSection/index";
import FourthSection from "./Components/FourthSection/index";
import FifthSection from "./Components/FifthSection/index";
import FooterMobile from "./Components/FooterMobile/index";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <FooterMobile />
            </header>
        </div>
    );
}

export default App;
