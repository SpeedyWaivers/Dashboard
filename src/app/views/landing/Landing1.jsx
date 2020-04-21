import React from "react";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Services1 from "./components/Services1";
import Specialities from "./components/Specialities1";
import Testimonial1 from "./components/Testimonial1";
import Company1 from "./components/Company1";
import Contact1 from "./components/Contact1";
import Footer1 from "./components/Footer1";
import { ThemeProvider } from "@material-ui/core/styles";
import { landingTheme } from "./landingTheme";
import GlobalStyles from "./styles/GlobalStyles";

const Landing1 = () => {
  return (
    <ThemeProvider theme={landingTheme}>
      <div className="bg-white">
        <GlobalStyles>
          <Intro1 />
          <Intro2 />
          <Services1 />
          <Specialities />
          <Testimonial1 />
          <Company1 />
          <Contact1 />
          <Footer1 />
        </GlobalStyles>
      </div>
    </ThemeProvider>
  );
};

export default Landing1;
