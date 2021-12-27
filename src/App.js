import "./App.scss";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import SectionData from "./SectionData";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {/* {Object.keys(Section).map((res, index) => {
        console.log(res);
        const { title, desc, url, jc, bg } = res;
        return (
          <Section
            title={title}
            desc={desc}
            url={url}
            jc={jc}
            bg={bg}
            key={index}
          />
        );
      })} */}
    </div>
  );
}

export default App;
