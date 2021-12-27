import "./App.scss";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Data from "./SectionData";
import { img1, img2, img3, img4 } from "./ImageImports";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Section
        title={Data["sec1"].title}
        desc={Data["sec1"].desc}
        jc={Data["sec1"].jc}
        bg={Data["sec1"].bg}
        src={img1}
      />
      <Section
        title={Data["sec2"].title}
        desc={Data["sec2"].desc}
        jc={Data["sec2"].jc}
        bg={Data["sec2"].bg}
        src={img2}
      />
      <Section
        title={Data["sec3"].title}
        desc={Data["sec3"].desc}
        jc={Data["sec3"].jc}
        bg={Data["sec3"].bg}
        src={img3}
      />
      <Section
        title={Data["sec4"].title}
        desc={Data["sec4"].desc}
        jc={Data["sec4"].jc}
        bg={Data["sec4"].bg}
        src={img4}
      />
    </div>
  );
}

export default App;
