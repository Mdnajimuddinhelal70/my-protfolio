import About from "../About/About";
import Contact from "../Contact/Contact";
import MyWork from "../MyWork/MyWork";
import Services from "../Services/Services";
import HomeBanner from "./HomeBanner";


const Home = () => {
    return (
        <div>
          <HomeBanner />
          <About />
          <Services />
          <MyWork />
          <Contact />
        </div>
    );
};

export default Home;