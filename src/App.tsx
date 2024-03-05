import React from "react";

import Navbar from "./Components/Navbar/Narbar";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import FooterMobile from "./Components/FooterMobile/FooterMobile";

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
