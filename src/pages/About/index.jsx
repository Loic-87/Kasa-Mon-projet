import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import { aboutList } from "../../data/about";
import bannerAbout from "../../assets/banner-about.webp";
import "./About.scss";

function About() {
  return (
    <>
      <h1 className="visually-hidden">A propos</h1>
      <Banner image={bannerAbout} />
      <div className="about-collapses">
        {aboutList.map((item) => (
          <Collapse
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
}

export default About;
