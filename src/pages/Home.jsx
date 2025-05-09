import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectFade, Mousewheel, Pagination } from "swiper/modules";
import { Credit, Character, News } from "../components/home-section";
SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    clickable: true, // 클릭 가능하도록 설정
  },
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Character isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <News isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </>
  );
};

export default Home;
