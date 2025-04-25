import "./credit.scss";
import HomeSection from "../HomeSection";
import { title, seven } from "../../../assets/images";

const Credit = (props) => {
  return (
    <HomeSection className={`credit ${props.isActive ? "active" : ""}`}>
      <video
        autoPlay="autoplay"
        muted="muted"
        playsinline="playsinline"
        loop="loop"
        className="video"
        src="https://sgimage.netmarble.com/images/netmarble/COMMON/20241004/wthf1728003738293.mp4"
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
