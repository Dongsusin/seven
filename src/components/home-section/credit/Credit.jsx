import "./credit.scss";
import HomeSection from "../HomeSection";
import { title, seven } from "../../../assets/images";
import bg_1 from "../../../assets/vidio/bg-1.mp4";

const Credit = (props) => {
  return (
    <HomeSection className={`credit ${props.isActive ? "active" : ""}`}>
      <video
        autoPlay="autoplay"
        muted="muted"
        playsinline="playsinline"
        loop="loop"
        className="video"
        src={bg_1}
      />
      <div className="content">
        <img src={title} alt="" />
        <a href="https://sena.netmarble.com/ko">
          <img src={seven} className="button" alt="" />
        </a>
      </div>
    </HomeSection>
  );
};

export default Credit;
